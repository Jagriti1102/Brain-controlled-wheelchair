"use client";
import React, { useEffect, useRef } from "react";

export default function SimulationPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = 800;
    const height = 600;
    canvas.width = width;
    canvas.height = height;

    // Load background image
    const bgImg = new Image();
    bgImg.src = "/public/playground.jpeg";

    // Load wheelchair image
    const wcImg = new Image();
    wcImg.src = "/public/logo.png"; // same as your Tkinter version

    const wheelchair = {
      x: width / 2,
      y: height - 70,
      r: 60,
      vx: 0,
      vy: 0,
      speed: 3,
      smoothing: 0.2,
      noiseLevel: 0.005,
    };

    const hurdles = [
      [100, 200, 40, 20], [180, 300, 40, 20], [250, 150, 20, 40],
      [330, 400, 40, 20], [400, 280, 40, 20], [480, 200, 20, 40],
      [550, 320, 40, 20], [630, 220, 20, 40], [700, 350, 40, 20]
    ];

    let controlVX = 0;
    let controlVY = 0;
    let currentVX = 0;
    let currentVY = 0;
    let stopped = false;
    let lastSignalTime = Date.now();

    function generateSignal() {
      return 8 + Math.random() * 22;
    }

    function classifySignal(freq) {
      if (freq <= 12) return [0, -1];     // forward
      else if (freq <= 16) return [1, 0]; // right
      else if (freq <= 20) return [0, 1]; // back
      else return [-1, 0];                // left
    }

    function isCollision(x, y) {
      if (x < wheelchair.r || x > width - wheelchair.r || y < wheelchair.r || y > height - wheelchair.r) return true;
      return hurdles.some(([x1, y1, w, h]) =>
        x > x1 && x < x1 + w && y > y1 && y < y1 + h
      );
    }

    function update() {
      if (!stopped) {
        if (Date.now() - lastSignalTime > 2500) {
          const freq = generateSignal();
          [controlVX, controlVY] = classifySignal(freq);
          lastSignalTime = Date.now();
        }

        const noisyVX = controlVX + (Math.random() * 2 - 1) * wheelchair.noiseLevel;
        const noisyVY = controlVY + (Math.random() * 2 - 1) * wheelchair.noiseLevel;

        currentVX += (noisyVX - currentVX) * wheelchair.smoothing;
        currentVY += (noisyVY - currentVY) * wheelchair.smoothing;

        const dx = currentVX * wheelchair.speed;
        const dy = currentVY * wheelchair.speed;
        const newX = wheelchair.x + dx;
        const newY = wheelchair.y + dy;

        if (!isCollision(newX, newY)) {
          wheelchair.x = newX;
          wheelchair.y = newY;
        }

        wheelchair.x = Math.max(wheelchair.r, Math.min(wheelchair.x, width - wheelchair.r));
        wheelchair.y = Math.max(wheelchair.r, Math.min(wheelchair.y, height - wheelchair.r));
      }

      draw();
      requestAnimationFrame(update);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(bgImg, 0, 0, width, height);

      // Draw hurdles
      ctx.fillStyle = "saddleBrown";
      hurdles.forEach(([x, y, w, h]) => {
        ctx.fillRect(x, y, w, h);
      });

      // Draw wheelchair
      ctx.drawImage(wcImg, wheelchair.x - wheelchair.r, wheelchair.y - wheelchair.r, wheelchair.r * 2, wheelchair.r * 2);
    }

    bgImg.onload = () => wcImg.onload = () => update();

    // Emergency stop on space key
    const handleKey = (e) => {
      if (e.code === "Space") stopped = true;
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <canvas ref={canvasRef} className="rounded-2xl shadow-lg border border-gray-300" />
    </div>
  );
}

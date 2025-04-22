"use client";
import React from "react";
import Bookingform from "./Bookingform";

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg p-8 shadow-lg max-w-md w-full z-50">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 text-xl">×</button>
        </div>
        <h2 className="text-2xl font-bold mb-2">Book Now</h2>
        <Bookingform/>
      </div>
    </div>
  );
}

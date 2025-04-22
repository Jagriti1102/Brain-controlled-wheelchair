import tkinter as tk
from PIL import Image, ImageTk
import math
import random
import time
import os

class WheelchairSim:
    def __init__(self, master):
        self.master = master
        self.width = 800
        self.height = 600

        # Canvas and background
        self.canvas = tk.Canvas(master, width=self.width, height=self.height)
        self.canvas.pack()
        bg_path = os.path.join(os.path.dirname(__file__), 'playground.jpeg')
        bg_img = Image.open(bg_path).resize((self.width, self.height))
        self.bg_photo = ImageTk.PhotoImage(bg_img)
        self.canvas.create_image(0, 0, image=self.bg_photo, anchor='nw')

        # Simulation parameters
        # Increased size for better visibility
        self.r = 60  # half-size of wheelchair icon (full size 120x120)
        self.speed = 3  # moderated speed for precision
        self.dt = 0.05  # seconds per update
        # Start near bottom center
        self.x = self.width / 2
        self.y = self.height - self.r - 10

        # Obstacles
        self.hurdles = []
        specs = [
            (100, 200, 40, 20), (180, 300, 40, 20), (250, 150, 20, 40),
            (330, 400, 40, 20), (400, 280, 40, 20), (480, 200, 20, 40),
            (550, 320, 40, 20), (630, 220, 20, 40), (700, 350, 40, 20)
        ]
        for hx, hy, hw, hh in specs:
            self.canvas.create_rectangle(hx, hy, hx+hw, hy+hh, fill='saddle brown', outline='')
            self.hurdles.append((hx, hy, hx+hw, hy+hh))

        # Wheelchair image
        wc_path = os.path.join(os.path.dirname(__file__), 'logo.png')
        wc_img = Image.open(wc_path).resize((self.r*2, self.r*2))
        self.wc_photo = ImageTk.PhotoImage(wc_img)
        self.wheelchair = self.canvas.create_image(self.x, self.y, image=self.wc_photo)

        # Synthetic control variables
        self.control_vx = 0.0
        self.control_vy = 0.0
        self.current_vx = 0.0
        self.current_vy = 0.0
        # Increased smoothing and reduced noise for stability
        self.smoothing = 0.2        
        self.noise_level = 0.005   
        # Signals change less often to avoid jitter
        self.signal_interval = 2.5  # seconds between new signals
        self.last_signal_time = time.time()

        # Emergency stop flag bound to space key
        self.stopped = False
        master.bind('<space>', lambda e: setattr(self, 'stopped', True))

        # Start update loop
        self.update()

    def is_collision(self, x, y):
        # screen boundaries
        if x < self.r or x > self.width - self.r or y < self.r or y > self.height - self.r:
            return True
        # hurdle collisions
        for x1, y1, x2, y2 in self.hurdles:
            if x1 < x < x2 and y1 < y < y2:
                return True
        return False

    def generate_signal(self):
        # synthetic frequency between 8 and 30 Hz
        return random.uniform(8, 30)

    def classify_signal(self, freq):
        # map frequency to direction vector
        if freq <= 12:
            return (0, -1)   # forward
        elif freq <= 16:
            return (1, 0)    # right
        elif freq <= 20:
            return (0, 1)    # backward
        else:
            return (-1, 0)   # left

    def update(self):
        if not self.stopped:
            now = time.time()
            # update control vector periodically
            if now - self.last_signal_time >= self.signal_interval:
                freq = self.generate_signal()
                vx, vy = self.classify_signal(freq)
                self.control_vx, self.control_vy = vx, vy
                self.last_signal_time = now

            # apply noise and smoothing
            noisy_vx = self.control_vx + random.uniform(-self.noise_level, self.noise_level)
            noisy_vy = self.control_vy + random.uniform(-self.noise_level, self.noise_level)
            self.current_vx += (noisy_vx - self.current_vx) * self.smoothing
            self.current_vy += (noisy_vy - self.current_vy) * self.smoothing

            dx = self.current_vx * self.speed
            dy = self.current_vy * self.speed
            new_x = self.x + dx
            new_y = self.y + dy

            # collision check and avoidance by turning around obstacle
            if not self.is_collision(new_x, new_y):
                self.x, self.y = new_x, new_y
            else:
                # try perpendicular turns: clockwise then counterclockwise
                for adx, ady in [(dy, -dx), (-dy, dx), (-dx, -dy)]:
                    ax, ay = self.x + adx, self.y + ady
                    if not self.is_collision(ax, ay):
                        self.x, self.y = ax, ay
                        self.current_vx = adx / self.speed
                        self.current_vy = ady / self.speed
                        break
            # clamp to screen
            self.x = max(self.r, min(self.x, self.width - self.r))
            self.y = max(self.r, min(self.y, self.height - self.r))

            # update graphic
            self.canvas.coords(self.wheelchair, self.x, self.y)

        # schedule next update
        self.master.after(int(self.dt * 1000), self.update)

if __name__ == '__main__':
    root = tk.Tk()
    root.title('Brain-Controlled Wheelchair Simulation')
    app = WheelchairSim(root)
    root.mainloop()
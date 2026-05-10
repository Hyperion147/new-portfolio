"use client";

export const playClickSound = () => {
  const audio = new Audio("/click.mp3");
  audio.volume = 0.5;
  audio.play().catch((err) => console.log("Audio play error:", err));
};

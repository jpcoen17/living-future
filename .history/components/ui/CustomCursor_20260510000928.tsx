"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const cursor = cursorRef.current;
  const follower = followerRef.current;

  if (!cursor || !follower) return;

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  let animationFrameId: number;

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  };

  const animate = () => {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

    animationFrameId = requestAnimationFrame(animate);
  };

  const handleHover = () => {
    cursor.classList.add("hover");
  };

  const handleUnhover = () => {
    cursor.classList.remove("hover");
  };

  document.addEventListener("mousemove", handleMouseMove);

  const interactiveElements = document.querySelectorAll("a, button");

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", handleHover);
    el.addEventListener("mouseleave", handleUnhover);
  });

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);

    interactiveElements.forEach((el) => {
      el.removeEventListener("mouseenter", handleHover);
      el.removeEventListener("mouseleave", handleUnhover);
    });

    cancelAnimationFrame(animationFrameId);
  };
}, []);
"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

export default function Page() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');

    if (canvas instanceof HTMLCanvasElement) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/xC76A97fyCb9eFWU/scene.splinecode');
    } else {
      console.error("Canvas element not found.");
    }
  }, []);

  useEffect(() => {
    // Apply CSS to prevent scrolling on mobile devices
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth <= 768; // Adjust the width as needed for your design
      if (isMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto'; // Re-enable scrolling for larger screens
      }
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="canvas-container" style={{ position: "absolute", zIndex: -1, width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <canvas className="centered-canvas" id="canvas3d"></canvas>
        </div>
        <div>
          <SignIn
            appearance={{
              layout: {
                socialButtonsPlacement: 'bottom',
                socialButtonsVariant: 'iconButton',
                termsPageUrl: 'https://clerk.dev/terms'
              },
              variables: {
                colorText: "white",
                colorPrimary: "white",
                colorAlphaShade: "white",
                colorInputText: "white",
                colorBackground: "rgba(0, 0, 0, 0.95)",
                colorInputBackground: "rgba(250, 250, 250, 0.05)"
              },
              elements: {
                formButtonPrimary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}




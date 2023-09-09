"use client";

import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  // Initialize the 3D canvas and load the Spline scene
  useEffect(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load('https://draft.spline.design/9oPv4rdac4FNZlef/scene.splinecode');
    }
  }, []);

  return (
    <div className="auth-layout">
      <div className="centered-container">
        <canvas className="centered-canvas" id="canvas3d"></canvas>
      </div>
      <main className="content">{children}</main>

      <style jsx>{`
        .auth-layout {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          position: relative;
        }

        .centered-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1; /* Place the canvas behind the content */
        }

        .centered-canvas {
          width: 100%;
          height: 100%;
        }

        .content {
          position: relative; /* Ensure the content can be positioned relative to its parent */
          z-index: 1; /* Place the content above the canvas */
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;


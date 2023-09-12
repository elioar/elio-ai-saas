"use client";

import './background.scss'; // Import the CSS file with the background styles
import { useState } from 'react';

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {

  // Define a state variable to control the class name
  const [backgroundClassName, setBackgroundClassName] = useState('background-container');

  return (
    <div className="auth-layout">
      <div className="centered-container">
        {/* Place the background here */}
        <div className={`blur-container ${backgroundClassName}`}>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>
      {/* Place the centered content here */}
      <main className="content centered-content">{children}</main>
    </div>
  );
};

export default AuthLayout;

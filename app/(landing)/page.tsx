"use client";

import React, { useState } from 'react';
import 'app/(auth)/background.scss';
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
    // Define a state variable to control the class name
    const [backgroundClassName] = useState('background-container');
  
    return (
      <div className="auth-layout">
        <div className="centered-container">
          {/* Place the background here */}
          <div className={`blur-container ${backgroundClassName}`}>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </div>
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
      </div>
    );
  };
  
  export default LandingPage;

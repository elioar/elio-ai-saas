"use client";

import 'app/(auth)/background.scss';
import { useState } from 'react';

const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {

  const [backgroundClassName] = useState('background-container');


  return (
    <main className="h-full overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
            {children}
        </div>
    </main>
  );
}

export default LandingLayout
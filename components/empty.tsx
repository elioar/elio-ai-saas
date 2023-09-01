import { Application } from '@splinetool/runtime';
import { useEffect } from 'react';

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.id = 'canvas3d';
        canvas.width = 70; // Set your desired width
        canvas.height = 70; // Set your desired height
        
        const div = document.querySelector('.h-full.p-20.flex.flex-col.items-center.justify-center');
        if (div) {
            div.appendChild(canvas);

            const app = new Application(canvas);
            app.load('https://draft.spline.design/NXzRIPcmZlvQXwfP/scene.splinecode');
        }
    }, []);

    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <p className="text-muted-foreground text-sm text-center mb-20">
                {label}
            </p>
        </div>
    );
}

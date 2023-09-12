import Image from "@/node_modules/next/image"
import Load from "./load";


export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-20 h-20 relative ">
                <Load />
            </div>
            <p className="text-sm text-muted-foreground">
                Elio is thinking...
            </p>
        </div>
    );
};

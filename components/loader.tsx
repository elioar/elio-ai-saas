import Image from "@/node_modules/next/image"


export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-20 h-20 relative ">
                <Image
                    alt="logo"
                    fill
                    src="/fluid-loader.gif"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Elio is thinking...
            </p>
        </div>
    );
};

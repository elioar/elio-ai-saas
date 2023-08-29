import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserAvatar = () => {
    const { user } = useUser();

    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.CharAt(0)}
                {user?.lastName?.CharAt(0)}
            </AvatarFallback>
        </Avatar>
    );
};
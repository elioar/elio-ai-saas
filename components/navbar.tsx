import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import DarkModeSwitch from './DarkModeSwitch';
import { Moon, Sun } from "lucide-react";
import { ModeToggle } from "./Mode-toggle";

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();
  
    return ( 
      <div className="flex items-center p-4">
        <MobileSidebar apiLimitCount={apiLimitCount} />
        <div className="mr-6 flex w-full justify-end items-center">            
            <ModeToggle/>
        </div>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
     );
  }

export default Navbar;
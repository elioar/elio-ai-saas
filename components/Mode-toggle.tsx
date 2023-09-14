"use client"
 
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
 
export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // Use the `theme` variable to get the current theme

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="relative overflow-hidden bg-[rgba(250, 250, 250, 0.20)] border-0"
        onClick={() => {
          // Toggle the theme based on the current theme
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-[0deg] scale-[1] dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-[90deg] scale-[0] dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
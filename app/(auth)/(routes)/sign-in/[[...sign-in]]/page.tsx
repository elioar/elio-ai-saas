import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn 
  appearance={{
    layout: {
      socialButtonsPlacement: 'bottom',
      socialButtonsVariant: 'iconButton',
      termsPageUrl: 'https://clerk.dev/terms'
    },
    variables:{
      colorText: "white",
      colorPrimary: "white",
      colorAlphaShade: "white",
      colorInputText: "white",
      colorBackground: "rgba(0, 0, 0, 0.95)",
      colorInputBackground: "rgba(250, 250, 250, 0.05)"
    },
    elements: {
      formButtonPrimary:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    }
  }}
  />;
}
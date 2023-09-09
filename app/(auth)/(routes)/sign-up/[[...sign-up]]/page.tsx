import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp
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
      colorBackground: "rgba(250,250,250,0.04)",
      colorInputBackground: "rgba(250,250,250,0.03)"
    },
    elements: {
      formButtonPrimary:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    }
  }}
  />;
};
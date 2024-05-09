import Email from "./Email";
import Moon from "./Moon";
import Sun from "./Sun";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
interface IconProps {
  name: "email" | "moon" | "sun" | "github" | "linkedin";
}

export default function Icon({ name }: IconProps) {
  switch (name) {
    case "email":
      return <Email />;
    case "moon":
      return <Moon />;
    case "sun":
      return <Sun />;
    case "github":
      return <Github />;
    case "linkedin":
      return <LinkedIn />;
    default:
      return <></>;
  }
}

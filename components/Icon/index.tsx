import Email from "./Email";
import Moon from "./Moon";
import Sun from "./Sun";

interface IconProps {
  name: "email" | "moon" | "sun";
}

export default function Icon({ name }: IconProps) {
  switch (name) {
    case "email":
      return <Email />;
    case "moon":
      return <Moon />;
    case "sun":
      return <Sun />;
    default:
      return <></>;
  }
}

"use client";
import { useState, useEffect } from "react";

const roles = [
  "Azim",
  "currently seeking opportunities",
  "a Software Engineer",
  "a Full Stack Developer",
  "a UI/UX Designer",
];

export default function Role() {
  const [role, setRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];
    const typeSpeed = deleting ? 50 : 100;

    const handleType = () => {
      const nextLength = deleting ? role.length - 1 : role.length + 1;
      setRole(currentText.slice(0, nextLength));

      if (!deleting && role.length === currentText.length - 1) {
        setTimeout(() => setDeleting(true), 1000); // Wait before starting to delete
      }
      if (deleting && role.length === 1) {
        setDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setInterval(handleType, typeSpeed);

    return () => clearInterval(timer);
  }, [role, deleting, roleIndex]);

  return <span className="glossy-text">{role}</span>;
}

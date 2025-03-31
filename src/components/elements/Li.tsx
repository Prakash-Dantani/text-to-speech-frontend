import React from "react";
interface LiProps {
  children: React.ReactNode;
  className?: String;
  onClick?: () => void;
}
const LiElement = ({ children, className = "", onClick }: LiProps) => {
  return (
    <li className={`${className}`} onClick={onClick}>
      {children}
    </li>
  );
};

export default LiElement;

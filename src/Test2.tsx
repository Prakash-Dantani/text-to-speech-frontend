import react from "react";

// const Test2: React.FC<props> = ({ name }) => {
const Test2 = ({ name }: { name?: string }) => {
  return `${name || "Guest"}`;
};

export default Test2;

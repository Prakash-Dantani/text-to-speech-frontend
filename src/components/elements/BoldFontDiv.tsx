import react from "react";

interface BoldFontDivProps {
  children: React.ReactNode;
  className?: String;
}

const BoldFontDiv = ({ children, className = "" }: BoldFontDivProps) => {
  return (
    <>
      <div className={`{className}`}>{children}</div>
    </>
  );
};

export default BoldFontDiv;

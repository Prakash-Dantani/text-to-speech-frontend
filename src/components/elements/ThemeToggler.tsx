import { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [isdark, setIsdark] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isdark");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <input
      type="checkbox"
      value="dark"
      className="toggle sm:toggle-md toggle-xs theme-controller"
      checked={isdark}
      onChange={() => setIsdark(!isdark)}
    />
  );
};

export default ThemeToggler;

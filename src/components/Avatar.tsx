import { useState, useEffect } from "react";

const Avatar = ({ gender }: { gender: string }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const seed = Math.random().toString(36).substring(2, 10);
    setUrl(
      `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&gender=${gender}`
    );
  }, [gender]);

  return url ? <img src={url} alt="Avatar" className="rounded-xl" /> : null;
};

export default Avatar;

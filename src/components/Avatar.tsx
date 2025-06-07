import { useState, useEffect } from "react";
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  gender: string;
}
const Avatar = ({ gender, className = "", ...rest }: AvatarProps) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const seed = Math.random().toString(36).substring(2, 10);
    setUrl(
      `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&gender=${gender}`
    );
  }, [gender]);

  return url ? (
    <img
      src={url}
      alt="Avatar"
      className={`rounded-2xl ${className}`}
      {...rest}
    />
  ) : null;
};

export default Avatar;

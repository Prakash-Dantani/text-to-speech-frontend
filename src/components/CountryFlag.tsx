import * as Flags from "country-flag-icons/react/1x1";

const CountryFlag = ({ code }: { code: string }) => {
  const FlagComponent = Flags[code as keyof typeof Flags];

  if (!FlagComponent) return <span>🏳️</span>; // fallback if code not found

  return <FlagComponent title={code} className="rounded-full w-8 h-8" />;
};

export default CountryFlag;

export type IconName =
  | "phone"
  | "mail"
  | "pin"
  | "factory"
  | "building"
  | "road"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "hardhat";

const paths: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2C9.7 20 4 14.3 4 7a2 2 0 0 1 0-4Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l6 4v-4l6 4V7l6 4v10Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </>
  ),
  road: (
    <>
      <path d="M8 3 4 21M16 3l4 18M12 3v3M12 10v3M12 17v3" />
    </>
  ),
  check: <path d="m5 12 5 5L20 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  hardhat: (
    <>
      <path d="M4 18a8 8 0 0 1 16 0Z" />
      <path d="M12 8v2M3 18h18" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

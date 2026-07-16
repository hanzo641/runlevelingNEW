export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-serif)",
        fontWeight: 700,
        fontSize: size * 0.72,
        color: "var(--color-primary-dark)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" fill="#2F6D5C" />
        <path
          d="M16 24C16 24 8 19.5 8 13.6C8 10.5 10.4 8 13.4 8C14.9 8 16 8.8 16 8.8C16 8.8 17.1 8 18.6 8C21.6 8 24 10.5 24 13.6C24 19.5 16 24 16 24Z"
          fill="#F5E6C8"
          opacity="0.001"
        />
        <path
          d="M10 18C10 18 12.5 9 20 8C20 8 20 15 15 17.5C12.7 18.6 10 18 10 18Z"
          fill="#EAF3EE"
        />
        <path
          d="M10 18C13 14.5 16.5 12 20 8"
          stroke="#2F6D5C"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      Zenaide
    </span>
  );
}

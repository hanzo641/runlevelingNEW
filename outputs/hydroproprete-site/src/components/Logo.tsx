export function Logo({ size = 30 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-serif)",
        fontWeight: 700,
        fontSize: size * 0.62,
        color: "var(--color-primary-dark)",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#1670A6" />
        <path
          d="M16 6C16 6 10 14.5 10 19.2C10 22.8 12.7 25.5 16 25.5C19.3 25.5 22 22.8 22 19.2C22 14.5 16 6 16 6Z"
          fill="#EAF4FA"
        />
        <path
          d="M13.5 19.5C13.5 21.4 14.9 22.8 16.4 22.8"
          stroke="#1670A6"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      Hydropropreté
    </span>
  );
}

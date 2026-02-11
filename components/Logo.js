export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-svg ${className}`}
      role="img"
      aria-label="Ali Usta - Türk Lezzetleri"
    >
      <defs>
        <linearGradient id="goldVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8cc6e" />
          <stop offset="100%" stopColor="#b89730" />
        </linearGradient>
        <linearGradient id="goldHorizontal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="50%" stopColor="#e8cc6e" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
      </defs>

      {/* ALİ USTA */}
      <text
        x="150"
        y="32"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="8"
        fill="url(#goldVertical)"
      >
        ALİ USTA
      </text>

      {/* Dekoratif çizgi sol */}
      <line x1="42" y1="42" x2="108" y2="42" stroke="url(#goldHorizontal)" strokeWidth="1" opacity="0.5" />

      {/* TÜRK LEZZETLERİ */}
      <text
        x="150"
        y="54"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="6"
        fill="url(#goldHorizontal)"
        opacity="0.8"
      >
        TÜRK LEZZETLERİ
      </text>

      {/* Dekoratif çizgi sağ */}
      <line x1="192" y1="42" x2="258" y2="42" stroke="url(#goldHorizontal)" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

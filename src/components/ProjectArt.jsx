// SVG-based project artwork so cards look distinct without external images.
const palettes = {
  royalty: ["#8B5CF6", "#6366F1", "#06B6D4"],
  loyalty: ["#EC4899", "#8B5CF6", "#6366F1"],
  resume: ["#06B6D4", "#22D3EE", "#6366F1"],
  sms: ["#6366F1", "#8B5CF6", "#22D3EE"],
  chat: ["#22D3EE", "#06B6D4", "#8B5CF6"],
  portfolio: ["#8B5CF6", "#EC4899", "#06B6D4"]
};

function ProjectArt({ variant = "royalty", className = "" }) {
  const colors = palettes[variant] ?? palettes.royalty;
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.55" />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={`acc-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors[1]} />
          <stop offset="100%" stopColor={colors[2]} />
        </linearGradient>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.7" />
          <stop offset="100%" stopColor={colors[0]} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="240" fill="#0A0F1F" />
      <rect width="400" height="240" fill={`url(#bg-${variant})`} />
      <circle cx="80" cy="60" r="120" fill={`url(#glow-${variant})`} />
      <circle cx="320" cy="200" r="120" fill={`url(#glow-${variant})`} />

      {/* Window chrome */}
      <rect x="30" y="40" width="340" height="160" rx="20" fill="rgba(5,8,22,0.75)" stroke="rgba(255,255,255,0.08)" />
      <circle cx="50" cy="60" r="4" fill="#ef4444" />
      <circle cx="64" cy="60" r="4" fill="#f59e0b" />
      <circle cx="78" cy="60" r="4" fill="#10b981" />

      {/* Content blocks */}
      <rect x="50" y="84" width="120" height="14" rx="7" fill={`url(#acc-${variant})`} />
      <rect x="50" y="106" width="200" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="50" y="120" width="160" height="8" rx="4" fill="rgba(255,255,255,0.12)" />

      <rect x="50" y="146" width="90" height="40" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" />
      <rect x="150" y="146" width="90" height="40" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" />
      <rect x="250" y="146" width="100" height="40" rx="10" fill={`url(#acc-${variant})`} opacity="0.85" />

      {/* Floating chip */}
      <g transform="translate(280,80)">
        <rect x="0" y="0" width="80" height="44" rx="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="14" cy="22" r="6" fill={colors[2]} />
        <rect x="26" y="14" width="42" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
        <rect x="26" y="24" width="32" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
      </g>
    </svg>
  );
}

export default ProjectArt;

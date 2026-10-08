// Light-themed parametric UI artwork representing application architecture
const palettes = {
  aurevia: {
    bg: "#EFF6FF",
    border: "#BFDBFE",
    accent: "#2563EB",
    subtle: "#93C5FD",
    panel: "#FFFFFF"
  },
  nexawell: {
    bg: "#F0FDF4",
    border: "#BBF7D0",
    accent: "#16A34A",
    subtle: "#86EFAC",
    panel: "#FFFFFF"
  },
  "company-website": {
    bg: "#FAF5FF",
    border: "#E9D5FF",
    accent: "#7C3AED",
    subtle: "#C084FC",
    panel: "#FFFFFF"
  },
  "celebrity-face-recognition": {
    bg: "#FFFBEB",
    border: "#FDE68A",
    accent: "#D97706",
    subtle: "#FCD34D",
    panel: "#FFFFFF"
  }
};

function ProjectArt({ variant = "aurevia", className = "" }) {
  const p = palettes[variant] || palettes.aurevia;

  return (
    <svg
      viewBox="0 0 500 320"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(24,24,27,0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Frame canvas */}
      <rect width="500" height="320" fill={p.bg} />
      <rect width="500" height="320" fill={`url(#grid-${variant})`} />

      {/* Main App Window */}
      <rect
        x="30"
        y="25"
        width="440"
        height="270"
        rx="14"
        fill={p.panel}
        stroke={p.border}
        strokeWidth="1.5"
      />

      {/* Window Controls */}
      <circle cx="50" cy="45" r="4.5" fill="#EF4444" opacity="0.75" />
      <circle cx="64" cy="45" r="4.5" fill="#F59E0B" opacity="0.75" />
      <circle cx="78" cy="45" r="4.5" fill="#10B981" opacity="0.75" />

      {/* Window Title Bar Mock */}
      <rect x="100" y="40" width="120" height="10" rx="5" fill="rgba(24,24,27,0.08)" />

      {/* App Sidebar */}
      <rect x="45" y="65" width="80" height="215" rx="8" fill="rgba(24,24,27,0.02)" />
      <rect x="55" y="80" width="60" height="8" rx="4" fill={p.accent} opacity="0.3" />
      <rect x="55" y="100" width="50" height="6" rx="3" fill="rgba(24,24,27,0.12)" />
      <rect x="55" y="116" width="45" height="6" rx="3" fill="rgba(24,24,27,0.12)" />
      <rect x="55" y="132" width="55" height="6" rx="3" fill="rgba(24,24,27,0.12)" />

      {/* Main Content Area */}
      {/* Top metric tiles */}
      <g transform="translate(140, 65)">
        <rect x="0" y="0" width="95" height="52" rx="8" fill="white" stroke={p.border} strokeWidth="1" />
        <rect x="12" y="12" width="45" height="6" rx="3" fill="rgba(24,24,27,0.15)" />
        <rect x="12" y="26" width="30" height="12" rx="4" fill={p.accent} />

        <rect x="105" y="0" width="95" height="52" rx="8" fill="white" stroke={p.border} strokeWidth="1" />
        <rect x="117" y="12" width="50" height="6" rx="3" fill="rgba(24,24,27,0.15)" />
        <rect x="117" y="26" width="35" height="12" rx="4" fill={p.subtle} />

        <rect x="210" y="0" width="105" height="52" rx="8" fill="white" stroke={p.border} strokeWidth="1" />
        <rect x="222" y="12" width="40" height="6" rx="3" fill="rgba(24,24,27,0.15)" />
        <rect x="222" y="26" width="48" height="12" rx="4" fill={p.accent} opacity="0.8" />
      </g>

      {/* Center Data Chart / Workflow */}
      <g transform="translate(140, 130)">
        <rect x="0" y="0" width="315" height="90" rx="8" fill="white" stroke={p.border} strokeWidth="1" />
        <rect x="15" y="15" width="80" height="8" rx="4" fill="rgba(24,24,27,0.18)" />

        {/* Dynamic bar charts */}
        <rect x="15" y="55" width="18" height="24" rx="3" fill={p.accent} opacity="0.8" />
        <rect x="42" y="42" width="18" height="37" rx="3" fill={p.accent} />
        <rect x="69" y="48" width="18" height="31" rx="3" fill={p.subtle} />
        <rect x="96" y="35" width="18" height="44" rx="3" fill={p.accent} />
        <rect x="123" y="50" width="18" height="29" rx="3" fill={p.subtle} />
        <rect x="150" y="30" width="18" height="49" rx="3" fill={p.accent} />

        {/* Line indicator */}
        <path
          d="M 185 65 Q 220 30, 260 48 T 300 25"
          fill="none"
          stroke={p.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="300" cy="25" r="4" fill={p.accent} />
      </g>

      {/* Bottom status line */}
      <g transform="translate(140, 232)">
        <rect x="0" y="0" width="315" height="48" rx="8" fill="white" stroke={p.border} strokeWidth="1" />
        <circle cx="20" cy="24" r="5" fill="#10B981" />
        <rect x="35" y="20" width="110" height="8" rx="4" fill="rgba(24,24,27,0.18)" />
        <rect x="235" y="16" width="65" height="16" rx="8" fill={p.bg} stroke={p.border} strokeWidth="1" />
      </g>
    </svg>
  );
}

export default ProjectArt;

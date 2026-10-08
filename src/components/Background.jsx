function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Playful Dotted Grid Pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#151923" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Small, purposefully placed color cues. Sections carry the main palette. */}

      {/* Floating Graphic Symbols (SVGs) */}
      <svg className="absolute top-20 right-16 hidden opacity-35 text-electricBlue motion-safe:animate-pulse lg:block" width="36" height="36" viewBox="0 0 36 36">
        <path d="M18 0L22 14L36 18L22 22L18 36L14 22L0 18L14 14Z" fill="currentColor" />
      </svg>

      <svg className="absolute top-1/2 left-10 hidden lg:block opacity-30 text-coral" width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 4" />
      </svg>

      <svg className="absolute bottom-1/3 right-12 hidden lg:block opacity-35 text-mint" width="32" height="32" viewBox="0 0 32 32">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(45 16 16)" />
      </svg>
    </div>
  );
}

export default Background;

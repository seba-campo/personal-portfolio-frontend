export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial fade so the grid dissolves toward the edges/center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, var(--background) 75%)",
        }}
      />

      {/* Accent corner glow — single, restrained */}
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-[0.12]"
        style={{ background: "var(--primary)" }}
      />
    </div>
  )
}

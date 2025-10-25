const GridOverlay = () => {
  return (
    <div
      className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
  );
};

export default GridOverlay;

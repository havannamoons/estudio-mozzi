export function BlobsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="animate-blob-1 absolute h-[480px] w-[480px] rounded-full opacity-60"
        style={{
          top: "-100px",
          left: "-80px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.25), transparent 70%)",
        }}
      />
      <div
        className="animate-blob-2 absolute h-[520px] w-[520px] rounded-full opacity-60"
        style={{
          top: "30%",
          right: "-120px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)",
        }}
      />
      <div
        className="animate-blob-3 absolute h-[480px] w-[480px] rounded-full opacity-60"
        style={{
          bottom: "-100px",
          left: "25%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)",
        }}
      />
    </div>
  )
}

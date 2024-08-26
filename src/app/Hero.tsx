type HeroProps = {
  imageUrl: string;
  children: React.ReactNode;
  fullScreen: boolean;
};

export default function Hero({ imageUrl, children, fullScreen }: HeroProps) {
  return (
    <div
      className={`hero ${fullScreen ? "min-h-screen" : "h-[50vh]"}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
}


export const WavyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-primary">
      <svg className="absolute bottom-0 left-0 right-0 w-full h-auto text-background"
           width="100%"
           height="100"
           viewBox="0 0 1440 120"
           preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M1440,120H0V99.51C157.12,33.18,347.88,0,517.5,0,761,0,802.21,120,1031.5,120S1284.88,86.82,1440,50.49V120Z"
              fill="currentColor" />
      </svg>
    </div>
  );
};

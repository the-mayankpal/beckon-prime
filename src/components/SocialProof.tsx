const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
];

const SocialProof = () => {
  return (
    <div className="flex items-center justify-center gap-3 animate-fade-up animation-delay-400">
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
            style={{ zIndex: avatars.length - index }}
          >
            <img
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        Join <span className="text-foreground font-medium">3,000+</span> people on waitlist
      </span>
    </div>
  );
};

export default SocialProof;

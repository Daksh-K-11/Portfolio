const SocialIcon = ({ icon, label }) => {
  // Simple-icons case
  if (icon.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 transition-all duration-300"
        aria-label={label}
      >
        <path
          d={icon.path}
          className="fill-muted-foreground group-hover:fill-current dark:group-hover:fill-white"
          style={{ color: `#${icon.hex}` }}
        />
      </svg>
    );
  }

  // Lucide case (LinkedIn)
  const LucideIcon = icon;

  return (
    <LucideIcon
      className="w-7 h-7 text-muted-foreground group-hover:text-[#0A66C2] transition-all duration-300"
      strokeWidth={2}
    />
  );
};

export default SocialIcon;
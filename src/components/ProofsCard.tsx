type ProofsCardProps = {
  text: string;
  anchor?: string;
  link?: string;
  isActive: boolean;
  onHover?: () => void;
  onLeave?: () => void;
};

const ProofsCard = ({ text, anchor, link, isActive, onHover, onLeave }: ProofsCardProps) => {
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}
      className={`${isActive ? 'bg-[#CBACF9]/90' : 'bg-white/5'}
      border border-white/30 rounded-sm h-10 w-30 flex justify-center items-center`}
    >
      <a href={link || anchor} target={link ? '_blank' : '_self'} rel={link ? 'noopener noreferrer' : undefined}>
        {text}
      </a>
    </div>
  );
};

export default ProofsCard
import { cn } from '../lib';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn(
      'backdrop-blur-px rounded-[15px] border border-white/30 bg-gradient-to-br from-white/90 to-white/30 shadow-[2px_10px_29px_0px_rgba(47,49,65,0.02)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;

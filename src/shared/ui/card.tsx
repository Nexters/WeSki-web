import { cn } from '../lib';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-[15px] border border-white bg-gradient-to-br from-white/90 to-white/60 shadow-[2px_10px_29px_0px_rgba(47,49,65,0.02)] backdrop-blur-[25px]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;

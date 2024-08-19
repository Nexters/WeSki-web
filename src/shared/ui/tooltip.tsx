'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { cn } from '../lib';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverArrow = PopoverPrimitive.Arrow;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn('z-40 rounded-[8px] bg-gray-90 p-[10px] text-white', className)}
    {...props}
  />
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

interface TooltipProps {
  isOpen?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

export const Tooltip = ({
  trigger,
  children,
  isOpen,
  side = 'top',
  align = 'center',
}: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(isOpen);

  return (
    <Popover
      open={tooltipOpen || isOpen}
      onOpenChange={(open) => {
        setTooltipOpen(open);
      }}
    >
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverPrimitive.PopoverPortal>
        <PopoverContent side={side} align={align}>
          {children} <PopoverArrow className="PopoverArrow" />
        </PopoverContent>
      </PopoverPrimitive.PopoverPortal>
    </Popover>
  );
};

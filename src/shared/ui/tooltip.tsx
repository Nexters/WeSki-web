'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { useEffect } from 'react';
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
    className={cn('rounded-[8px] bg-gray-90 p-[10px] text-white', className)}
    {...props}
  />
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

interface TooltipProps {
  isOpen?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip = ({ trigger, children, isOpen }: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  useEffect(() => {
    isOpen && setTooltipOpen(isOpen);
  }, [isOpen]);

  console.log(isOpen, tooltipOpen);

  return (
    <Popover
      open={tooltipOpen}
      onOpenChange={(open) => {
        setTooltipOpen(open);
      }}
    >
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent side="top">
        {children} <PopoverArrow className="PopoverArrow" />
      </PopoverContent>
    </Popover>
  );
};

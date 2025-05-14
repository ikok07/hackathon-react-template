import {Button} from "@/components/ui/shadcn/button";
import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

type ShadowButtonProps = {
    href?: string
} & ComponentProps<"button">

export default function ShadowButton({children, href, onClick, disabled, className, ...props}: ShadowButtonProps) {
    const button = <Button
        className={
            cn(
                "h-max py-1.5 px-3",
                className
            )
        }
        variant="ghost"
        onClick={disabled ? () => {} : onClick}
        disabled={disabled}
        {...props}
    >
        {children}
    </Button>

    if (href) return <a href={href}>{button}</a>

    return button
}
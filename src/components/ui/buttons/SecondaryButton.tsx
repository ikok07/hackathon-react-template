import {Button} from "@/components/ui/shadcn/button";
import {Loader2} from "lucide-react";
import {cn} from "@/utils/cn";
import type { ComponentProps } from "react";

type SecondaryButtonProps = {
    href?: string,
    loading?: boolean
} & ComponentProps<"button">

export default function SecondaryButton({children, href, onClick, disabled, loading, className, ...props}: SecondaryButtonProps) {
    const button = <Button
        className={
            cn(
                "cursor-pointer truncate text-primary bg-background hover:bg-gray-100 border border-gray-200 dark:border-gray-900 h-max py-1.5 px-3 rounded-md",
                className,
                {
                    "cursor-not-allowed opacity-50": loading || disabled
                }
            )
        }
        onClick={disabled || loading ? () => {} : onClick}
        {...props}
    >
        {loading && <Loader2 className="animate-spin"/>}
        {children}
    </Button>

    if (href) return <a href={href}>{button}</a>

    return button;
}
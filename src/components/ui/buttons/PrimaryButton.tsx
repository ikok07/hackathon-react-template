import {Button} from "@/components/ui/shadcn/button";
import {Loader2} from "lucide-react";
import { cn } from "@/utils/cn";
import type {ComponentProps} from "react";

type PrimaryButtonProps = {
    href?: string,
    loading?: boolean,
    loadingText?: string
} & ComponentProps<"button">

export default function PrimaryButton({children, href, onClick, disabled, loading, loadingText, className, ...props}: PrimaryButtonProps) {
    const button = <Button
        className={
            cn(
                "cursor-pointer bg-accent hover:bg-accent/80 h-max py-1.5 px-3 text-white rounded-md",
                className,
                {
                    "cursor-not-allowed from-gray-400 to-gray-600 hover:from-gray-400 hover:to-gray-600 dark:from-gray-500 dark:to-gray-700 dark:text-white dark:hover:from-gray-400 dark:hover:to-gray-600": loading || disabled
                }
            )
        }
        onClick={disabled || loading ? () => {} : onClick}
        disabled={disabled}
        {...props}
    >
        {loading && <Loader2 className="animate-spin"/>}
        {loading && loadingText ? loadingText : children}
    </Button>

    if (href) return <a href={href}>{button}</a>

    return button
}
import {LoadingSpinner} from "@/components/ui/shadcn/loading-spinner";
import {cn} from "@/utils/cn";

type PrimaryLoaderProps = {
    className?: string
}

export default function PrimaryLoader({className}: PrimaryLoaderProps) {
    return <LoadingSpinner className={cn(
        "stroke-border",
        className
    )}/>
}
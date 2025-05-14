import {Switch} from "@/components/ui/shadcn/switch";
import {cn} from "@/utils/cn";
import type {ComponentProps} from "react";

type PrimarySwitchProps = ComponentProps<typeof Switch>

export default function PrimarySwitch({className, ...props}: PrimarySwitchProps) {
    return <Switch
        className={cn(
            "data-[state=checked]:bg-cta",
            className
        )}
        {...props}
    />
}
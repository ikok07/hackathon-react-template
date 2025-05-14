import {useAppState} from "@/state/app.state.tsx";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton.tsx";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton.tsx";

export default function TestNestedComponent() {
    const {appCounter, setAppCounter} = useAppState();

    function countUp() {
        setAppCounter(v => v + 1);
    }

    function countDown() {
        if (appCounter > 0) setAppCounter(v => v - 1);
    }

    return <div>
        Counter: ${appCounter}
        <div className="flex items-center gap-3">
            <PrimaryButton onClick={countUp}>Count up</PrimaryButton>
            <SecondaryButton onClick={countDown} disabled={appCounter === 0}>Count down</SecondaryButton>
        </div>
    </div>
}
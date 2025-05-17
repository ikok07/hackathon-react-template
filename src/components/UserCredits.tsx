export default function UserCredits() {
    const userCredits= 25;
    return (
        <div>
            <button className="flex gap-1">
                <p>{userCredits}</p> <img src="/credits.svg" alt='credits' width={20} height={20} />
            </button>
        </div>
    );
}

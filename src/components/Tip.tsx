function Tip({text}) {
    return (
        <div className="flex items-center bg-blue-100 border-l-8 border-blue-800 rounded-xl p-4">
            <p className="">💡Tip: {text}.</p>
        </div>
    );
}

export default Tip;
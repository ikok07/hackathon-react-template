import {DataTableDemo} from "@/components/ui/shadcn/data-table.tsx";
import {useEffect} from "react";
import {toast} from "react-toastify";
function AdminDashBoardPage() {
    const notify = () => toast('Daniel Todorov walks in the door!');
    useEffect(() => {
        const timeout = setTimeout(() => {
            notify();
        }, Math.random() * Math.PI * 5);

        return () => clearTimeout(timeout);
    });

    return (
        <div className="mx-5">
            <h1 className="mt-2 text-3xl font-bold">Logo</h1>
            <DataTableDemo/>


        </div>
    );
}

export default AdminDashBoardPage;
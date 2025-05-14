import {Outlet} from "react-router";

export default function NestedExamplePage() {
    return <div className="p-3">
        Nested content:
        <Outlet />
    </div>
}
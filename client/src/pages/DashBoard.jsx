import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState("");
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get("tab");
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <div className="md:w-56">
                <DashSidebar></DashSidebar>
            </div>
            {tab === "profile" && <DashProfile></DashProfile>}
            {tab === "posts" && <DashPosts></DashPosts>}
            {tab === "users" && <DashUsers></DashUsers>}
        </div>
    );
}

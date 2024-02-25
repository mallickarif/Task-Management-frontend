import React from "react";
import { useSelector } from "react-redux";
import "../styles/Dashboard.scss";

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <div className="dashboard-container">
            <h2> {user.email} </h2>
            <div className="dashboard-content">
                <p>Welcome to your dashboard</p>
            </div>
        </div>
    );
}

export default Dashboard;
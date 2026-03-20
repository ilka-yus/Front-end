import { GetServerSideProps } from "next";
import { User, Notification } from "@/types";

interface DashboardProps {
    user: User;
    notifications: Notification[];
    analytics: {
        pageViews: number;
        sessions: number;
        bounceRate:number;
    };
    currentTime:string;
}

export default function Dashboard({
    user,
    notifications,
    analytics,
    currentTime
}: DashboardProps) {
    const unreadCount =notifications.filter(n=>!n.read).length;

    return (
        <div className="dashboard">
            <header>
                <h1>Welcome,{user.name}</h1>
                <p>Role: {user.role}</p>
            </header>

            <section className="analytics">
                <h2>Analytics</h2>
                <div className="stats">
                    <div>Page Views:{analytics.pageViews.toLocaleString()}</div>
                    <div>Sessions: {analytics.sessions.toLocaleString()}</div>
                    <div>Bounce Rate: {analytics.bounceRate.toFixed(1)}\%</div>
                </div>
            </section>

            <section className="notifications">
                <h2>Notifications ({unreadCount} unread)</h2>
                <ul>
                    {notifications.map(notif => (
                        <li key={notif.id} className={notif.read ?"read" : "unread"}>
                            <span className={`type ${notif.type}`}>{notif.type}</span>
                            {notif.message}
                        </li>
                    ))}
                </ul>
            </section>

            <footer>
                <p>Last updated:{currentTime}</p>
            </footer>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const user = {
        id: "user-123",
        name: "Demo User",
        email: "demo@example.com",
        avatar: "/avatars/demo.jpg",
        role: "user" as const,
    };

    const notifications = [
        { id: "1", type: "info" as const, message: "Welcome to the dashboard!", read: false, createdAt: "2026-03-01" },
        { id: "2", type: "success" as const, message: "Your profile was updated", read: true, createdAt: "2026-02-28" },
    ];

    const analytics = {
        pageViews: Math.floor(Math.random() * 10000),
        sessions: Math.floor(Math.random() * 1000),
        bounceRate: Math.random() * 100,
    };

    return {
        props: {
            user,
            notifications,
            analytics,
            currentTime: new Date().toISOString(),
        },
    };
};
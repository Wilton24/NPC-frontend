export default function CommunityCard({ icon, number, text }:
    {
        icon: React.ReactNode;
        number?: string;
        text?: string;
    }) {
    return (
        <div className="community-card">
            <p>{icon}</p>
            <p>{number}</p>
            <p>{text}</p>
        </div>
    )
}
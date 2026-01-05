import pickleBallLogo from '../assets/npc-logo-transparent.png';
import HeaderLinks from './UI/HeaderLinks';


export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={pickleBallLogo} alt="Pickleball Logo" />
            </div>
            <nav>
                <ul className="nav-list">
                    <HeaderLinks title="About Us" dropdown={["Our Team", "History"]} />
                    <HeaderLinks title="Membership" dropdown={["Pricing", "Benefits"]} />
                    <HeaderLinks title="Courts" dropdown={["Availability", "Book Now"]} />
                    <HeaderLinks title="Players" dropdown={["Players Home", "Rankings", "Player Profiles"]} />
                    <HeaderLinks title="Tournaments" dropdown={["Upcoming", "Results"]} />
                </ul>
            </nav>
        </header>
    )
}

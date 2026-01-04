import pickleBallLogo from '../assets/npc-logo-transparent.png'

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={pickleBallLogo} alt="Pickleball Logo" />
                {/* <img src="" alt="" /> */}
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#membership">Membership</a></li>
                    <li><a href="#courts">Courts</a></li>
                    <li><a href="#players">Players</a></li>
                    <li><a href="#tournaments">Tournaments</a></li>
                </ul>
            </nav>
        </header>
    )
}
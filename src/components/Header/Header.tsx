import { NavLink } from "react-router";
import styles from "./Header.module.css";
import NavItem from "./NavItem";
import logo from "../../assets/pickleball-logo.jpg";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <NavLink to="/" className={styles.logo}>
                    <img src={logo} alt="Pickleball Club" />
                    <span>Naval Pickleball Club</span>
                </NavLink>
            </div>

            <nav className={styles.center}>
                <ul className={styles.navList}>
                    <NavItem title="About" links={["Our Team", "History"]} />
                    <NavItem title="Membership" links={["Pricing", "Benefits"]} />
                    <NavItem title="Courts" links={["Availability", "Book Now"]} />
                    <NavItem title="Players" links={["Rankings", "Profiles"]} />
                    <NavItem title="Tournaments" links={["Upcoming", "Results"]} />
                </ul>
            </nav>

            <div className={styles.right}>
                <NavLink to="/login" className={styles.cta}>
                    Logout
                </NavLink>
            </div>
        </header>
    );
}

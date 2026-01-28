import { NavLink } from "react-router";
import styles from "./Header.module.css";
import NavItem from "./NavItem";
import logo from "../../assets/pickleball-logo.jpg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";


export default function Header() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    function logOutFn() {
        logout();
        navigate("/login");
    }

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
                    <NavItem title="Tournaments" links={["Upcoming", "Results", "Draws"]} />
                </ul>
            </nav>

            <div className={styles.right}>
                <button onClick={logOutFn} className={styles.cta}>
                    Logout
                </button>
            </div>
        </header>
    );
}

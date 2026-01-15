import { NavLink } from "react-router";
import styles from "./NavItem.module.css";

export default function NavItem({
    title,
    links,
}: {
    title: string;
    links: string[];
}) {
    return (
        <li className={styles.item}>
            <span className={styles.title}>{title}</span>

            <ul className={styles.dropdown}>
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink
                            to={`/${title.toLowerCase()}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

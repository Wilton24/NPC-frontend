import { NavLink } from "react-router";


export default function HeaderLinks({ title, dropdown = [] }: { title: string, dropdown: string[] }) {

    return (
        <li>
            <a href="#about-us">{title}</a>
            <ul className="dropdown">
                {dropdown.map((text: string, id: number) => {
                    return (
                        // <NavLink to={dropdown} key={id}><a href={text}>{text}</a></NavLink>
                        <NavLink
                            key={id}
                            to={`/players/${text.toLowerCase().replace(/\s+/g, '-')}`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            {text}
                        </NavLink>
                    )
                })}
            </ul>
        </li>
    )
}
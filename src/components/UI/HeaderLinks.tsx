export default function HeaderLinks({ title, dropdown = [] }: { title: string, dropdown: string[] }) {
    return (
        <li>
            <a href="#about-us">{title}</a>
            <ul className="dropdown">
                {dropdown.map((text: string) => {
                    return (
                        <li><a href={text}>{text}</a></li>
                    )
                })}
            </ul>
        </li>
    )
}
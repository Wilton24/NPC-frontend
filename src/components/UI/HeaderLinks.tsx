export default function HeaderLinks({ title, dropdown = [] }: { title: string, dropdown: string[] }) {
    return (
        <li>
            <a href="#about-us">{title}</a>
            <ul className="dropdown">
                {dropdown.map((text: string, id: number) => {
                    return (
                        <li key={id}><a href={text}>{text}</a></li>
                    )
                })}
            </ul>
        </li>
    )
}
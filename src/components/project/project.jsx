export default function Project({
    name, link,i
}) {
    return <h4>
        <a href={link}>
       {i}. {name}
    </a>
    </h4>
}
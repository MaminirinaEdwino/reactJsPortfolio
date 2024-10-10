export default function Tech({
    name, icon, level
}) {
    return <>
        <article>
            <h2>
                {name}
            </h2>
            
            <h6>
                {level}
            </h6>
            <div className={name == "ReactJs" && "react"}>
            {icon}
            </div>
        </article>
    </>
}
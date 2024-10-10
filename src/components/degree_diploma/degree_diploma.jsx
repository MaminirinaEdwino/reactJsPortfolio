export default function Degree({
    degree,
    date,
    place
}) {
    return <>
    
        <article>
            <h1>{degree}</h1>
            <span> {place} </span> <br />
            <span> {date} </span>
            
        </article>
    </>
}
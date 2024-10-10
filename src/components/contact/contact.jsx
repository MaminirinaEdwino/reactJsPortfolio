export default function Contact({
    contact_type,  icon, contact
}) {
    return <article>
        <span className="contact_type">{contact_type} {icon}</span>: {contact} 
    </article>
}
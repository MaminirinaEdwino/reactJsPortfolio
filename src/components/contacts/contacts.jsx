
import { CgFacebook, CgMail, CgPhone } from "react-icons/cg"
import Contact from "../contact/contact"
import { BsGithub } from "react-icons/bs"

export default function Contacts() {
    let contact_list = [
        {
            contact_type: "Email",
            contact: "Edwinomaminirina@gmail.com",
            icon: <CgMail />
        },
        {
            contact_type: "Phone",
            contact: "+261 34 78 829 25",
            icon: <CgPhone />
        },
        {
            contact_type: "Facebook",
            contact: "Edwino Rafitoarisoa",
            icon: <CgFacebook />
        },
        {
            contact_type: "GitHub",
            contact: "https://github.com/MaminirinaEdwino",
            icon: <BsGithub />
        }
    ]
    return <section id="contact">
        <h1>Contacts</h1>
        <div>
            {contact_list.map((contact, i) => <Contact contact_type={contact.contact_type}
                contact={contact.contact}
                icon={contact.icon} />)}
        </div>
    </section>
}
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {

    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact {...contact} deleteContact={deleteContact} />
                </li>
            ))}
            
        </ul>
    )
};

export default ContactList;
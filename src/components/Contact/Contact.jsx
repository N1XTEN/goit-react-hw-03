import styles from "./Contact.module.css"
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";

const Contact = ({ id, name, number, deleteContact }) => {
    const handleDeleteClick = () => {
    deleteContact(id);
  };
    return (
        <div className={styles.item}>
            <div>
                <p><FaUser size="11px" /> {name}</p>
                <p><FaPhoneAlt size="11px" /> {number}</p>
            </div>
            <button className={styles.btn} onClick={handleDeleteClick}>Delete</button>
        </div>
    )

};

export default Contact;
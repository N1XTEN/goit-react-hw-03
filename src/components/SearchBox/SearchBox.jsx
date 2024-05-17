import styles from "./SearchBox.module.css"

const SearchBox = ({ value, onChange }) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input
                type="text"
                placeholder="Search contacts..."
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </>
  );
};

export default SearchBox;
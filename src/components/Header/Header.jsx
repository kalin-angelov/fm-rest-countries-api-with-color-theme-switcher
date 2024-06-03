import styles from "./scss/Header.module.css";

const Header = ({ toggleTheme, setToggleTheme}) => {
    
    const handleToggle = () => {
        setToggleTheme(!toggleTheme);
    };

    return (
        <header className={styles.headerContainer} style={toggleTheme ? null : {backgroundColor: "#2b3743", color: "white"}}>
            <h1>Where in the world?</h1>
            <button 
                onClick={handleToggle}
                style={toggleTheme ? null : {backgroundColor: "#2b3743", color: "white"}}
            >
                <i className={toggleTheme ? "fa-regular fa-moon" : "fa-solid fa-moon"} ></i>
                Dark Mode
            </button>
        </header>
    );
};

export default Header;

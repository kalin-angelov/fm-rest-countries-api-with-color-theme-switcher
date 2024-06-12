import { useContext } from "react";
import styles from "./scss/Header.module.css";
import { Context } from "../../context/Context";

const Header = () => {
    const { dark, setDark } = useContext(Context); 
    
    const handleToggle = () => {
        const darkThemeColors = {background: "#2b3743", color: "white"};
        const darkTheme = localStorage.getItem("dark");
        if (darkTheme) {
            localStorage.clear();
            setDark(null);
        } else {
           localStorage.setItem("dark", JSON.stringify(darkThemeColors));
           setDark(JSON.parse(localStorage.getItem("dark")));
        }
    };

    return (
        <header className={styles.headerContainer} style={dark ? dark : null}>
            <h1>Where in the world?</h1>
            <button 
                onClick={handleToggle}
                style={dark ? dark : null}
            >
                <span><i className={dark ? "fa-regular fa-moon" : "fa-solid fa-moon"} ></i></span>
                Dark Mode
            </button>
        </header>
    );
};

export default Header;

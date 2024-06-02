import { useState } from "react";

const Header = () => {
    const [toggleThem, setToggleTheme] = useState(true);

    return (
        <header>
            <h1>Where in the world?</h1>
            <button><i className={toggleThem ? "fa-regular fa-moon" : "fa-solid fa-moon"} > Dark Mode</i></button>
        </header>
    );
};

export default Header;

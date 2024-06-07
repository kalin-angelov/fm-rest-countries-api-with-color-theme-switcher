import styles from "./scss/GoUpButton.module.css";

import { useEffect, useState } from "react";

const GoUpButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleButton = () => {
            (window.scrollY > 25) ?
                setShowButton(true)
            :
                setShowButton(false)
            
        }

        window.addEventListener("scroll", handleButton);

        return () => window.removeEventListener("scroll", handleButton);
    },[]);

    const onClick = () => {
        setShowButton(!setShowButton);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        showButton && 
        <button className={styles.goUp} onClick={onClick}>
            <span><i className="fa-solid fa-circle-arrow-up"></i></span>
        </button>
    );
};

export default GoUpButton;

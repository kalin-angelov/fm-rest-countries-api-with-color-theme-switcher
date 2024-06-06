import styles from "./scss/Details.module.css";

import { useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.detailsContainer}>
      <button onClick={() => navigate("/")}><i className="fa-solid fa-arrow-left"></i>Back</button>

      <div>
        <figure>
            <img src="" alt="" />
        </figure>
        <h1></h1>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Details

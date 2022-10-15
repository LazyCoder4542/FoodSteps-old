import React from "react";
import styles from "./CategoryList.module.css"
// import pic from {process.env.PUBLIC_URL + "/images/Picture for card (1).png"}

function CategoryList(props) {
    // const image = "props.items.img";
    // if(props.items.img === null) {
    //     image = process.env.PUBLIC_URL + "/images/Picture for card (1).png";
    // }
    

    return ( 
        <React.Fragment>
        <div className={styles.post}>
    <div className={styles.container1}>
         <img src={process.env.PUBLIC_URL + "/images/Picture for card (1).png"} alt="Food"/>  
    </div>
    <div className={styles.container2}>
        <h3>{props.items.title}</h3>
        <p>{props.items.paragraph}</p>
        <p id={styles.author}>BY: {props.items.author}</p>
        <a href="/" id={styles["read-more"]} className={styles["read-more"]}>Read More</a>
        <span>Comments: 300</span>
    </div>  
    </div>  
    </React.Fragment >
    )
}

export default CategoryList;
import React from 'react'
import styles from "./SubCategory.module.css"

const SubCategory = () => {
  return (
    <React.Fragment>
    <div className={styles["hero-section"]}>
    <div className={styles.image}>
        <img src={process.env.PUBLIC_URL + "/images/Picture for card (1).png"} alt="Food"/>
    </div>
    <div className={styles.box1}>
        <p className={styles.topic}>TOPIC: John Doe</p>
        <p className={styles.author}>BY: John Doe</p>
        <p className={styles.date}>Date Published: 28, spetember 2022</p>
        <p className={styles.tag}>Tag and Category</p>
    </div>
</div>

<div className={styles.body}>
    <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni voluptatibus ullam commodi fugit enim, autem ad provident neque porro amet deleniti fugiat sequi veniam! Doloribus fugit magnam corporis. Nihil in, qui eius eligendi consequuntur voluptatum placeat! Deserunt veniam aliquam expedita laboriosam repellat officiis facilis perspiciatis nihil amet suscipit corporis id illo esse molestiae velit architecto deleniti nesciunt quidem quae, cum voluptas eos. Molestiae nisi saepe recusandae earum ad, necessitatibus, corrupti magni laudantium sapiente non odit unde. Exercitationem tenetur fugiat cum veniam deserunt ad atque repudiandae hic aspernatur natus facere reprehenderit incidunt rerum ipsa, eveniet, quo, corporis illum adipisci consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni voluptatibus ullam commodi fugit enim, autem ad provident neque porro amet deleniti fugiat sequi veniam! Doloribus fugit magnam corporis. Nihil in, qui eius eligendi consequuntur voluptatum placeat! Deserunt veniam aliquam expedita laboriosam repellat officiis facilis perspiciatis nihil amet suscipit corporis id illo esse molestiae velit architecto deleniti nesciunt quidem quae, cum voluptas eos. Molestiae nisi saepe recusandae earum ad, necessitatibus, corrupti magni laudantium sapiente non odit unde. Exercitationem tenetur fugiat cum veniam deserunt ad atque repudiandae hic aspernatur natus facere reprehenderit incidunt rerum ipsa, eveniet, quo, corporis illum adipisci consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni voluptatibus ullam commodi fugit enim, autem ad provident neque porro amet deleniti fugiat sequi veniam! Doloribus fugit magnam corporis. Nihil in, qui eius eligendi consequuntur voluptatum placeat! Deserunt veniam aliquam expedita laboriosam repellat officiis facilis perspiciatis nihil amet suscipit corporis id illo esse molestiae velit architecto deleniti nesciunt quidem quae, cum voluptas eos. Molestiae nisi saepe recusandae earum ad, necessitatibus, corrupti magni laudantium sapiente non odit unde. Exercitationem tenetur fugiat cum veniam deserunt ad atque repudiandae hic aspernatur natus facere reprehenderit incidunt rerum ipsa, eveniet, quo, corporis illum adipisci consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni voluptatibus ullam commodi fugit enim, autem ad provident neque porro amet deleniti fugiat sequi veniam! Doloribus fugit magnam corporis. Nihil in, qui eius eligendi consequuntur voluptatum placeat! Deserunt veniam aliquam expedita laboriosam repellat officiis facilis perspiciatis nihil amet suscipit corporis id illo esse molestiae velit architecto deleniti nesciunt quidem quae, cum voluptas eos. Molestiae nisi saepe recusandae earum ad, necessitatibus, corrupti magni laudantium sapiente non odit unde. Exercitationem tenetur fugiat cum veniam deserunt ad atque repudiandae hic aspernatur natus facere reprehenderit incidunt rerum ipsa, eveniet, quo, corporis illum adipisci consequuntur.</p>
    </div>

    <div className={styles["write-for-us"]}>
        <div className={styles.write}>
            <h3>Write For us</h3>
            <p>Join the team of authors and rule your articles</p>
            <button id={styles["write-for-us"]}><a href="#">Write for Us</a></button>
        </div>
    </div>
</div>

<div className={styles["text-head"]}>
    <div className={styles.bar}></div>
    <p>Related Articles</p>
</div>

<div className={styles.section1}>
    <div className={styles.box2}>
        <img src={process.env.PUBLIC_URL + "/images/Picture for card (1).png"} alt="Food"/>
        <h3>How to make soup</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...</p>
        <p id={styles.author}>BY: Luke Sapron</p>
        <div className={styles.read}>
            <a href="#" id={styles["read-more"]}>Read More</a>
            <span>Comment: 300</span>
        </div>
    </div>
    <div class={styles.box2}>
        <img src={process.env.PUBLIC_URL + "/images/Picture for card (1).png"} alt="Food"/>
        <h3>How to make soup</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...</p>
        <p id={styles.author}>BY: Luke Sapron</p>
        <div class={styles.read}>
            <a href="#" id={styles["read-more"]}>Read More</a>
            <span>Comment: 300</span>
        </div>
    </div>
    <div class={styles.box2}>
        <img src={process.env.PUBLIC_URL + "/images/Picture for card (1).png"} alt="Food"/>
        <h3>How to make soup</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...</p>
        <p id={styles.author}>BY: Luke Sapron</p>
        <div class={styles.read}>
            <a href="#" id={styles["read-more"]}>Read More</a>
            <span>Comoment: 300</span>
        </div>
    </div>
</div>

<div class={styles["comment-section"]}>
    <form action="comment">
        <textarea name="comment" id={styles.text} cols="30" rows="10" placeholder="What do you have for the Author?"></textarea>
        <input type="submit" value="Submit Comment"/ >
    </form>
     <div class={styles["user-comment"]}>
        <p>Comments</p>
        <div class={styles["post-comment"]}>
            <div class={styles.cont}>
                <p id={styles.user}>Abubakar</p>
                <p id={styles.comment}>Nice one, I will try out this recipe and give a better feedback</p>
                <p id={styles.time}>15 mins ago</p>
            </div>
            <a href="#">Reply</a>
        </div>

        <div class={styles["post-comment"]}>
            <div class={styles.cont}>
                <p id={styles.user}>Abubakar</p>
                <p id={styles.comment}>Nice one, I will try out this recipe and give a better feedback</p>
                <p id={styles.time}>15 mins ago</p>
            </div>
            <a href="#">Reply</a>
        </div>

        <div class={styles["post-comment"]}>
            <div class={styles.cont}>
                <p id={styles.user}>Abubakar</p>
                <p id={styles.comment}>Nice one, I will try out this recipe and give a better feedback</p>
                <p id={styles.time}>15 mins ago</p>
            </div>
            <a href="#">Reply</a>
        </div>

        <div class={styles["post-comment"]}>
            <div class={styles.cont}>
                <p id={styles.user}>Abubakar</p>
                <p id={styles.comment}>Nice one, I will try out this recipe and give a better feedback</p>
                <p id={styles.time}>15 mins ago</p>
            </div>
            <a href="#">Reply</a>
        </div>
     </div>
</div>
</React.Fragment>
  )
}


export default SubCategory;
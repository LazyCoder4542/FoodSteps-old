import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Categories.module.css";
import CategoryList from "../components/CategoryList";
import Page404 from "./404";

let items = [
  {
   img: "/images/Picture for card (1).png",
   title: "How to make soup",
   paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
   author: "Luke Sapron",
   number: "300",
  },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

  {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

   {
    img: "/images/Picture for card (1).png",
    title: "How to make soup",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...",
    author: "Luke Sapron",
    number: "300",
   },

] 

function Categories(props) {
  const [currentPage, setCurrentPage] = useState(1)
   const [postsPerPage, setPostsPerPage] = useState(5)
  const allCategories = props.categories
  let { categoryName } = useParams()
  categoryName = decodeURIComponent(categoryName)
  if (allCategories.indexOf(categoryName) !== -1) {
    /* Your Code Goes here */
  //   if(items.length > 10) {
  //     items = items.slice(0, 9)
  //  }
   
  //  const NextPageHandler = () => {
  //    items = items.slice(9-18)
  //  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex  = lastPostIndex - postsPerPage;
 const currentPosts = items.slice(firstPostIndex, lastPostIndex);
 let pages = [];
 const totalPosts = items.length
  
 for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
     pages.push(i)
 }
 

    return (
      <React.Fragment>
    <h1>Categories &gt; {categoryName}</h1>
    <div className={styles["section-one"]}>
            <div className={styles.box1}>
                <div className={styles.bar}></div> 
                <h2>{categoryName}</h2>
            </div>
            </div>
            <div className={styles.box2}>
              <div className={styles.wrapper1}>
                {currentPosts.map((currentPosts) =>
                  <CategoryList items={currentPosts}/>
                )}
              </div>
              <div className={styles.wrapper2}>
                    <div className={styles.container3}>
                        <h3>Write For us</h3>
                        <p>Join the team of authors and rule your articles</p>
                        <button id={styles["write-for-us"]}><a href="/">Write for Us</a></button>
                    </div>
                </div>
              </div>
               <div className={styles["section-two"]}>
               <span id={styles.backward}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.2602 15.5302L9.74023 12.0002L13.2602 8.47021" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               </span>
                {pages.map((page, index) => {
                  return  <div className={styles.numbers}>
                  <span 
                  onClick={() => setCurrentPage(page)}
                  key={index}
                  id={styles.one} 
                  className={styles["page-number"]}>{page}</span>
                  </div>
                })}
                   <span id={styles.forward}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M10.7402 15.5302L14.2602 12.0002L10.7402 8.47021" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </span>
           </div>
     </React.Fragment>)
;
}
  /* If category doesn't exist */
   else {
    return <Page404 />
   }

}


export default Categories;


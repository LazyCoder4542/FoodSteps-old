import React from "react";
import { useParams } from "react-router-dom";

import Page404 from "./404";
function Categories(props) {
  const allCategories = props.categories
  let { categoryName } = useParams()
  categoryName = decodeURIComponent(categoryName)
  if (allCategories.indexOf(categoryName) != -1) {
    /* Your Code Goes here */
    return (<h1>Categories &gt; {categoryName}</h1>);
  }
  /* If category doesn't exist */
  else {
    return <Page404 />
  }
}

export default Categories;

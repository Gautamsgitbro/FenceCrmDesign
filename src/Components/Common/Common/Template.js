import React from "react";
import Header from "./Header";

const Template = (props) => {
return(
    <React.Fragment>
    <Header/>
   {props.childrens}

</React.Fragment>
)
}

export default Template;
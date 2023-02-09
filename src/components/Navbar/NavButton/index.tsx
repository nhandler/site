import React from "react";
import styles from "./styles.module.scss";


/**
 * This is a component for the smaller links to pages on the site.
 * The button has an animation when the user hovers over each button.
 * 
 * @param {*} props The title and url path of the page
 * @returns the navbutton component
 */
const NavButton = (props:{page:string, url:string, title:string}) => {
    // const isCurrentWindow = (url) => {
    //     if (
    //         window.location.href.substring(
    //             window.location.href.lastIndexOf("/") + 1
    //         ) === url
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    return (
        <div
            className={
                props.page === props.url ? "navbutton active" : "navbutton"
            }>
            <a href={"#" + props.url}>{props.title}</a>
        </div>
    );
};


export default NavButton;
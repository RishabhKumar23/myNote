import React from "react";

let year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>copyright ℗ {year} Rishabh Kumar</p>
        </footer>
    )
}

export default Footer;
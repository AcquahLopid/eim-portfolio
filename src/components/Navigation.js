import React from "react";
import "./Navigation.css"

function Navigation(props) {
    const { setTab, getTab } = props;

    return (
        <nav>
            <li>
                <a href="#about" onClick={() => getTab('About')} className={setTab === 'About' ? 'nav-link active' : 'nav-link'}>
                    About
                </a>
            </li>
            <li>
                <a href="#contact" onClick={() => getTab('Contact')} className={setTab === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li>
                <a href="#resume" onClick={() => getTab('Resume')} className={setTab === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
            <li>
                <a href="#portfolio" onClick={() => getTab('Portfolio')} className={setTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
        </nav>
    );
}


export default Navigation;
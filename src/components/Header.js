import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

function Header(props){
    const {
        setTab,
        getTab
    } = props;
    return (
        <div>
            <header className="flex-row">
                <h1>Emanuel Molina</h1>
            </header>
            <Navigation
                setTab={setTab}
                getTab={getTab}
                >
            </Navigation>
        </div>
    );
}


export default Header;
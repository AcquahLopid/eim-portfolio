import React, { useState } from "react";

import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

import Header from "./Header";
import Footer from "./Footer";

function Container() {
    const [setTab, getTab] = useState("about");

    const pickedTab = () => {
        if (setTab === "About"){
            return <About />;
        }
        if (setTab === "Contact"){
            return <Contact />;
        }
        if (setTab === "Resume"){
            return <Resume />;
        }
        if (setTab === "Portfolio"){
            return <Portfolio />;
        }
        return <About />;       
    };

    return (
        <>
        <Header setTab={setTab} getTab={getTab}/>
        <main>{pickedTab()}</main>
        <Footer></Footer>
        </>
    );
}

export default Container;
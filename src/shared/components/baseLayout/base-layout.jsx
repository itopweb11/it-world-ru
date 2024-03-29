import React from 'react';
import Header from "../header";
import Footer from "../footer";

export const BaseLayout = (props) => {
    return (
        <div>
            <Header setRegistration={props.setRegistration}/>
            {props.children}
            <Footer />
        </div>
    );
};
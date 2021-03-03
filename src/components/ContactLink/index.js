import React from 'react';

function ContactLink(props) {
    return(
        <p>
            My {props.type}: <a href={props.href} target={props.target === "blank" ? "_blank" : ""} rel="noreferrer"> {props.children}</a>
        </p>
    )
}

export default ContactLink;
import React from 'react';
import { Col } from '../Grid';
import './styles.css';

function Project(props) {
    let image = require(`../../images/${props.image}`);

    return(
        <Col size="xl-4 md-6" classes="d-flex">
            <div className="card">
                <div className="image">
                    <img src={image.default} alt={props.name}/>
                    <div className="overlay text-center d-flex justify-content-center align-items-center">
                        <a href={props.link} className="btn btn-success mr-3" target="_blank" rel='noreferrer'>Demo</a>
                    </div>
                </div>
                <div className="card-body text-center p-3">
                    <h3 className="text-center">{props.name}</h3>
                    <p className="mb-2">See the Github repo <a className="card-link" href={props.github} target="_blank" rel='noreferrer'>here</a></p>
                    <p><b>Technologies used:</b> {props.technologies}</p>
                </div>
            </div>
        </Col>
    )
}

export default Project;
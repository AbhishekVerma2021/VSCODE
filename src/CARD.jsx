import React from "react";
import './index.css';

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="image">
                        <img src={props.imgsrc} className="imga" />
                        <div className="cardtype">{props.ottname}</div>
                        <div className="cardname">{props.sname}</div>
                        <a href={props.slink}><button> Watch Now</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
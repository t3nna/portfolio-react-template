import React from "react";
import {Link} from "react-router-dom";
import background from "../images/Background.png";

export default function ListItem({itemData}){
    return(
        <li><Link to={`/items/${itemData.path}`}>
            <img src={itemData.background ? itemData.background : background} alt=""/>
            <div className="item-names">

                <h3 className="fs-third-heading">{itemData.name}</h3>
                <p className={'fw-light fs-300'}>Mechanical keyboard</p>
            </div>

        </Link>
        </li>
    )
}
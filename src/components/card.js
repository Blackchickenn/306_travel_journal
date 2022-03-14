import React from "react"
import PlacePoint from "../images/place-point.jpg"

export default function Card(props){
    return(
        <div className="card--section">
            <img src={props.item.imageUrl} alt="card-image" className="card--image"/>
            <div className="card--section--infos">
                <div className="card--section--location">
                    <img src={PlacePoint} alt="location-image" className="location--image"/>
                    <p className="location--text">{props.item.location}</p>
                    <a className="location--link" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--section--title">{props.item.title}</h1>
                <div className="card--section--date">
                    <p>{props.item.startDate}</p>
                    <p>-{props.item.endDate}</p>
                </div>
                <p className="card--section--description">{props.item.description}</p>
            </div>
        </div>
    )
}
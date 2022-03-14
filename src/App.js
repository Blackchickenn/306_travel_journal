import React from "react"
import Navbar from "./components/navbar"
import Card from "./components/card"
import data from "./components/data"

export default function App(){
    const cardData = data.map(item => {
        return (
            <Card
                // key={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <section>
                {cardData}
            </section>
        </div>
    )
}
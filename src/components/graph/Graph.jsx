import graphCSS from './Graph.module.css'
import { useState, useEffect } from 'react'
import { Bar, Line } from "react-chartjs-2"
import Chart from 'chart.js/auto'

function Graph({ comicList }) {

    const arr = comicList.map((comic) => comic.prices[0].price)
    const labels = comicList.map((comic) => comic.title.slice(0, 13) + '...')

    const dataset = {
        labels: labels,
        datasets: [
            {
                label: 'Print Price',
                data: arr,
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderWidth: 1,
            },
        ],
    }

    const [isBar, setIsBar] = useState(true)

    const changeGraph = (e) => {
        setIsBar(!isBar)
    }

    const graphComponent = isBar ? (<Bar className={graphCSS.graph} data={dataset} />)
            : (<Line className={graphCSS.graph} data={dataset} />)
    
    const buttonText = isBar ? ('Switch to Line Graph') : ('Switch to Bar Graph')

    return (
        <>
            <button className={graphCSS.toggle} onClick={changeGraph}>{buttonText}</button>
            <div className={graphCSS.container}>
                {graphComponent} 
            </div>
        </>
    )
}

export default Graph

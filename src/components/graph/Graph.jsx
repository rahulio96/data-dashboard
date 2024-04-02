import graphCSS from './Graph.module.css'
import { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2"
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
                backgroundColor: '#e23636',
                borderColor: '#e23636',
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className={graphCSS.container}>
            <Bar className={graphCSS.graph} data={dataset} />
        </div>
    )
}

export default Graph

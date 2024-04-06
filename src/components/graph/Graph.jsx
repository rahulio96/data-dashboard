import graphCSS from './Graph.module.css'
import { useState, useEffect } from 'react'
import { Bar, Line } from "react-chartjs-2"
import Chart from 'chart.js/auto'

function Graph({ comicList }) {

    const prices = comicList.map((comic) => comic.prices[0].price)
    const pages = comicList.map((comic) => comic.pageCount)
    const labels = comicList.map((comic) => comic.title.slice(0, 13) + '...')
    
    const [dataToggle, setDataToggle] = useState(true)

    const changeData = (e) => {
        setDataToggle(!dataToggle)
    }

    const dataBtn = dataToggle ? ('Switch to Price Graph') : ('Switch to Page Graph')

    const data = dataToggle ? (prices) : (pages)

    const label = dataToggle ? ('Print Price') : ('Page Count')

    const dataset = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data,
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
            <div className={graphCSS.btnContainer}>
                <button className={graphCSS.toggle} onClick={changeGraph}>{buttonText}</button>
                <button className={graphCSS.toggle} onClick={changeData}>{dataBtn}</button>
            </div>
            <div className={graphCSS.container}>
                {graphComponent} 
            </div>
        </>
    )
}

export default Graph

import statCardsCSS from './StatCards.module.css'
import { useEffect, useState } from 'react'

function StatCards({ staticList }) {

    const [avgPage, setAvgPage] = useState(0)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [length, setLength] = useState(0)
    const [avgPrice, setAvgPrice] = useState(0)

    useEffect(() => {
        const calculateStats = () => {
            setLength(staticList.length)
            
            let totalPrice = 0
            let totalPageCount = 0
            let min = Infinity
            let max = -Infinity

            for (let i = 0; i < staticList.length; i++) {
                let obj = staticList[i]       
                let price = obj.prices[0].price

                if (price > max) {
                    max = price
                } else if (price < min) {
                    min = price
                }
                totalPageCount += obj.pageCount
                totalPrice += price
            }
            setMinPrice(min)
            setMaxPrice(max)
            setAvgPage(totalPageCount / staticList.length)
            setAvgPrice(totalPrice / staticList.length)
        }
        calculateStats()
    }, [])

    return (
        <div className={statCardsCSS.container}>
            <div className={statCardsCSS.card}>Average Pages: <b>{avgPage}</b></div>
            <div className={statCardsCSS.card}>Total Entries: <b>{length}</b></div>
            <div className={statCardsCSS.card}>Price Range: <b>${minPrice} - ${maxPrice}</b></div>
            <div className={statCardsCSS.card}>Average Price: <b>${Math.floor(avgPrice * 100) / 100}</b></div>
        </div>
    )
}

export default StatCards
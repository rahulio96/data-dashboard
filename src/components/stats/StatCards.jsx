import './stats.css'
import { useEffect, useState } from 'react'

function StatCards({ staticList }) {

    const [avgPage, setAvgPage] = useState(0)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [length, setLength] = useState(0)

    useEffect(() => {
        const calculateStats = () => {
            setLength(staticList.length)
            
            let totalPageCount = 0

            let min = Infinity
            let max = -Infinity

            for (let i = 0; i < staticList.length; i++) {
                let obj = staticList[i]
                
                totalPageCount += obj.pageCount

                let price = obj.prices[0].price
                if (price > max) {
                    max = price
                } else if (price < min) {
                    min = price
                }
            }

            setMinPrice(min)
            setMaxPrice(max)
            setAvgPage(totalPageCount / staticList.length)

        }
        calculateStats()
    }, [])

    return (
        <div className="stat-container">
            <div className='stat-card'>Average Page Count: <b>{avgPage}</b></div>
            <div className='stat-card'>Total Entries: <b>{length}</b></div>
            <div className='stat-card'>Price Range: <b>${minPrice} - ${maxPrice}</b></div>
        </div>
    )
}

export default StatCards
import './stats.css'

function StatCards() {

    return (
        <div className="stat-container">
            <div className='stat-card'>Average Page Count: {35}</div>
            <div className='stat-card'>Total Entries: {100}</div>
            <div className='stat-card'>Price Range: ${1.51} - ${3.12}</div>
        </div>
    )
}

export default StatCards
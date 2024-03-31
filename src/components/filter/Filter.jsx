import './filter.css'

function Filter() {
    return (
        <div className='filter-container'>
            <input className='search' type="text" placeholder='Search by name...' />

            <div className='checkbox-container'>
                Max Pages
                <input className='slider' type="range" min="1" max="1000" value="500" />
            </div>

            <div className='checkbox-container'>
                Spider-Man
                <input className='checkbox search' type="checkbox" />
                X-Men
                <input className='checkbox' type="checkbox" />
            </div>
        </div>
    )
}

export default Filter
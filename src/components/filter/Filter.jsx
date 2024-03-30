import './filter.css'

function Filter() {
    return (
        <div className='filter-container'>
            <input className='search' type="text" placeholder='Search...' />

            <div className='checkbox-container'>
                Spider-Man
                <input className='checkbox search' type="checkbox" />
            </div>

            <div className='checkbox-container'>
                X-Men
                <input className='checkbox' type="checkbox" />
            </div>
        </div>
    )
}

export default Filter
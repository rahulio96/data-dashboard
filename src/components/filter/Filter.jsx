import './filter.css'
import { useState } from 'react'

function Filter( {setComicList, staticList} ) {

    const [spiderCheck, setSpiderCheck] = useState(false)
    const [xCheck, setXCheck] = useState(false)

    const [search, setSearch] = useState("")

    const onSearch = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (search) => {
        let filteredList = [...staticList]
        if (search.trim() !== "") {
            filteredList = filteredList.filter(comic =>
                comic.title.toLowerCase().includes(search.toLowerCase())
            )
            setComicList(filteredList)
        } else {
            setComicList(staticList)
        }
    }

    return (
        <div className='filter-container'>
            <input value={search} onChange={onSearch} className='search' type="text" placeholder='Search by name...' />

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
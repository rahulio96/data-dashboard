import { useState, useEffect } from 'react'
import filterCSS from './Filter.module.css'

function Filter( {setComicList, staticList} ) {

    const [spiderCheck, setSpiderCheck] = useState(false)
    const [xCheck, setXCheck] = useState(false)
    const [page, setPage] = useState(0)

    const [search, setSearch] = useState("")

    useEffect(() => {
        applyFilters()
    }, [search, spiderCheck, xCheck, page])

    const applyFilters = () => {
        let filteredList = staticList
        
        filteredList = filteredList.filter(comic =>
            comic.pageCount >= page
        )

        if (search.trim() !== "") {
            filteredList = filteredList.filter(comic =>
                comic.title.toLowerCase().includes(search.toLowerCase())
            )
        }

        if (spiderCheck) {
            filteredList = filteredList.filter(comic =>
                comic.title.toLowerCase().includes('spider-man')
            )
        }

        if (xCheck) {
            filteredList = filteredList.filter(comic =>
                comic.title.toLowerCase().includes('x-men')
            )
        }

        setComicList(filteredList)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const onSpiderCheck = (e) => {
        setSpiderCheck(e.target.checked)
    }

    const onXCheck = (e) => {
        setXCheck(e.target.checked)
    }
    
    const onPageChange = (e) => {
        setPage(parseInt(e.target.value))
    }

    return (
        <div className={filterCSS.container}>
            <input value={search} onChange={onSearch} className={filterCSS.search} type="text" placeholder='Search by name...' />
            <div className={filterCSS.checkboxContainer}>
                Max Pages (30-90)
                <input className={filterCSS.slider} type="range" min="30" max="90" step="1" value={page} onChange={onPageChange} />
            </div>
            <div className={filterCSS.checkboxContainer}>
                Spider-Man
                <input checked={spiderCheck} onChange={onSpiderCheck} className={filterCSS.checkbox} type="checkbox" />
                X-Men
                <input checked={xCheck} onChange={onXCheck} className={filterCSS.checkbox} type="checkbox" />
            </div>
        </div>
    )
}

export default Filter
import '../../App.css'
import homeCSS from './Home.module.css'
import ComicList from '../comic-list/ComicList'
import Header from '../header/Header'
import Filter from '../filter/Filter'
import StatCards from '../stats/StatCards'
import Graph from '../graph/Graph'
import { useEffect, useState } from 'react'

function Home() {
  const [comicList, setComicList] = useState(null)
  const [staticList, setStaticList] = useState(null)

  const PUBLIC_API_KEY = import.meta.env.VITE_APP_PUBLIC_KEY
  const HASH_KEY = import.meta.env.VITE_APP_MD5_HASH


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch (
          "http://gateway.marvel.com/v1/public/comics?ts=1&limit=100&orderBy=-focDate&noVariants=True&format=comic&apikey=" + PUBLIC_API_KEY +"&hash=" + HASH_KEY
      )
      const json = await response.json()
      console.log(json.data.results)
      setComicList(json.data.results.reverse())
      setStaticList(json.data.results)
    }
    fetchData()
  }, [])

  return (
    <div className={homeCSS.container}>
        <Header />
        {staticList && <StatCards staticList={staticList}/>}
        {staticList && <Filter setComicList={setComicList} staticList={staticList}/>}

        {staticList && <Graph comicList={comicList}/>}
        {comicList && <ComicList comicList={comicList}/>}


    </div>
  )
}

export default Home

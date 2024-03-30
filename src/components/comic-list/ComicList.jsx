import { useEffect, useState } from 'react'
import ComicCard from './ComicCard'
import './list.css'

function ComicList() {
  const [comicList, setComicList] = useState(null)

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
    }
    fetchData()
  }, [])

  return (
    <div className='total-comic-container'>
      {comicList && Object.entries(comicList).map(([comic]) =>
        <ComicCard className='img-card'
          key = {comicList[comic].id} 
          title = {comicList[comic].title} 
          image={comicList[comic].thumbnail.path + '.' + comicList[comic].thumbnail.extension}
        />
      )}
    </div>
  )
}

export default ComicList

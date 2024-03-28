import { useEffect, useState } from 'react'

function ComicList() {
  const [comicList, setComicList] = useState(null)

  const PUBLIC_API_KEY = import.meta.env.VITE_APP_PUBLIC_KEY
  const HASH_KEY = import.meta.env.VITE_APP_MD5_HASH


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch (
          "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + PUBLIC_API_KEY +"&hash=" + HASH_KEY
      )
      const json = await response.json()
      console.log(json.data.results)
      setComicList(json.data.results)
    }
    fetchData()
  }, [])

  return (
    <>
      <ul>
        {comicList && Object.entries(comicList).map(([comic]) =>
          <li key={comicList[comic].id}> {comicList[comic].title} </li>
        )}
      </ul>
    </>
  )
}

export default ComicList

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const HASH_KEY = import.meta.env.VITE_APP_MD5_HASH
const PUBLIC_API_KEY = import.meta.env.VITE_APP_PUBLIC_KEY
import comicPageCSS from './ComicPage.module.css'

function ComicPage() {

    let params = useParams()
    const [fullDetails, setFullDetails] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
    const [url, setUrl] = useState('')
    const [series, setSeries] = useState('')


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch (
              `http://gateway.marvel.com/v1/public/comics/${params.id}?ts=1&apikey=` + PUBLIC_API_KEY +"&hash=" + HASH_KEY
          )
          const json = await response.json()
          const comic = json.data.results[0]
          setFullDetails(comic) 
          setImg(comic.thumbnail.path + '.' + comic.thumbnail.extension)
          setPrice(comic.prices[0].price)
          setUrl(comic.urls[0].url)
          setSeries(comic.series.name)
          console.log(comic)
        }
        fetchData()
      }, [params.id])

    return (
      <div className={comicPageCSS.container}>
        <img className={comicPageCSS.img} src={img} />
        <div className={comicPageCSS.content}>

          <b className={comicPageCSS.title}>Comic Name: {fullDetails.title}</b>
          <b className={comicPageCSS.title}>Series Name: {series}</b>

          <p className={comicPageCSS.desc}>{fullDetails.description}</p>
          <div>
            <p>Page Count: {fullDetails.pageCount}</p>
            <p>Print Price: ${price}</p>
          </div>
          <a href={url}><button className={comicPageCSS.linkButton}>More Details</button></a>
        </div>
      </div>
    )
  }
  
  export default ComicPage;
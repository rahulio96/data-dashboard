import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const HASH_KEY = import.meta.env.VITE_APP_MD5_HASH
const PUBLIC_API_KEY = import.meta.env.VITE_APP_PUBLIC_KEY

function ComicPage() {

    let params = useParams()
    const [fullDetails, setFullDetails] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch (
              `http://gateway.marvel.com/v1/public/comics/${params.id}?ts=1&apikey=` + PUBLIC_API_KEY +"&hash=" + HASH_KEY
          )
          const json = await response.json()
          setFullDetails(json.data.results[0])  
          console.log(json.data.results[0])
        }
        fetchData()
      }, [params.id])

    return (
      <div>{fullDetails.title}</div>
    )
  }
  
  export default ComicPage;
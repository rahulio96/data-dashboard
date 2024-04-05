import comicCSS from './Comic.module.css'
import { Link } from 'react-router-dom'

function ComicCard({title, image, id}) {

    return (
            <Link  className={comicCSS.card}to={`/details/${id}`}>
                <p className={comicCSS.title}>{title}</p>
                <div>
                    <img src={image} />
                </div>
            
            </Link>
        
    )

}

export default ComicCard
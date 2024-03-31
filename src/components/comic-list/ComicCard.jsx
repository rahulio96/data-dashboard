import comicCSS from './Comic.module.css'

function ComicCard({title, image}) {

    return (
        <div className={comicCSS.card}>
            <p className={comicCSS.title}>{title}</p>
            <div>
                <img src={image} />
            </div>
        </div>
    )

}

export default ComicCard
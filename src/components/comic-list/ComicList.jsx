import ComicCard from './ComicCard'
import comicCSS from './Comic.module.css'

function ComicList({comicList}) {

  return (
    <div className={comicCSS.container}>
      {comicList && Object.entries(comicList).map(([comic]) =>
        <ComicCard className={comicCSS.card}
          key = {comicList[comic].id} 
          title = {comicList[comic].title} 
          image={comicList[comic].thumbnail.path + '.' + comicList[comic].thumbnail.extension}
          id={comicList[comic].id}
        />
      )}
    </div>
  )
}

export default ComicList

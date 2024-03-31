import ComicCard from './ComicCard'
import classes from './Comic.module.css'

function ComicList({comicList}) {

  return (
    <div className={classes.container}>
      {comicList && Object.entries(comicList).map(([comic]) =>
        <ComicCard className={classes.card}
          key = {comicList[comic].id} 
          title = {comicList[comic].title} 
          image={comicList[comic].thumbnail.path + '.' + comicList[comic].thumbnail.extension}
        />
      )}
    </div>
  )
}

export default ComicList

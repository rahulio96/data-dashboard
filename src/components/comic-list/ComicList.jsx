import { useEffect, useState } from 'react'
import ComicCard from './ComicCard'
import './list.css'

function ComicList({comicList}) {

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

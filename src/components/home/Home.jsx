import '../../App.css'
import ComicList from '../comic-list/ComicList'
import Header from '../header/Header'
import Filter from '../filter/Filter'

function Home() {

  return (
    <>
        <Header />
        <Filter />
        <ComicList />
    </>
  )
}

export default Home

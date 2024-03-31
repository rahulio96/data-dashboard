import '../../App.css'
import ComicList from '../comic-list/ComicList'
import Header from '../header/Header'
import Filter from '../filter/Filter'
import StatCards from '../stats/StatCards'

function Home() {

  return (
    <>
        <Header />
        <StatCards />
        <Filter />
        <ComicList />
    </>
  )
}

export default Home

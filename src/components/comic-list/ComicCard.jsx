import './list.css'

function ComicCard({title, image}) {

    return (
        <div className='comic-card'>
            <p className='title'>{title}</p>
            <div className='img-wrapper'>
                <img src={image} />
            </div>
        </div>
    )

}

export default ComicCard
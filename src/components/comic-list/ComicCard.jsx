import classes from './Comic.module.css'

function ComicCard({title, image}) {

    return (
        <div className={classes.card}>
            <p className={classes.title}>{title}</p>
            <div>
                <img src={image} />
            </div>
        </div>
    )

}

export default ComicCard
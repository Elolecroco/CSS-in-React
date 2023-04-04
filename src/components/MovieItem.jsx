import { useState } from 'react'
import RatingSystem from './RatingSystem'
import FavoriteSystem from './Favorite'

function MovieItem (props) {
    const [rating, setRating] = useState()
    const [favorite, setFavorite] = useState(false)
    return (
        <div className="movieContainer">
            <div className='img-container'>
                <img src={props.imgSrc} alt={props.name}/>
            </div>
            <div className='favoriteBtn'> 
                 <FavoriteSystem favorite={favorite} setFavorite={setFavorite} />
            </div>
            <div className="movieDesc">
                <h2>{props.name}</h2>
                <p>{props.year} - {props.genre} - {props.duration}</p>
                <p>{props.description}</p>
            </div>
                <div className="movieRatings">
                    <p>Press Rating: {props.pressRating}</p>
                    <p>Public Rating: {props.publicRating}</p>
                    <p>Your Rating: </p>
                      {Array(5).fill().map((_, index) => (
                        index <= rating ? 
                        <RatingSystem 
                        key={index}
                        index={index}
                        setRating={setRating}
                        filled={true}
                        /> : <RatingSystem 
                        key={index}
                        index={index}
                        setRating={setRating}
                        filled={false}
                        />
                    ))}  
                
                <div className='checkbox'>
                    
                </div>
            </div>
            
        </div>
    )
}

export default MovieItem
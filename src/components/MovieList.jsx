import MovieItem from "./MovieItem"
import RatingSystem from './RatingSystem';

function MovieList({MovieInfo}) {
    console.log(MovieInfo)
    return (
        <div className="card-container">
            {MovieInfo.map((list) => ( 
                <MovieItem key={list.name} {...list}/>
            ))}
        </div>
    )
}

export default MovieList
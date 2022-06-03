import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const getClassByRate = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}


const Movies = ({ poster_path, title, vote_average, overview,id}) => (
    <div className='movie'>
        <div className="movie-header">
            <Link to={`/movie/${id}`}>
            <img src={ poster_path ? (IMGPATH + poster_path):
            'https://media.istockphoto.com/photos/rear-view-asian-chinese-group-of-audience-watching-3d-movie-in-cinema-picture-id1334590638'
            } alt={title} />
            </Link>
        </div>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`${getClassByRate(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
)
export default Movies
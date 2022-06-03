import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';


const Apiurl="https://api.themoviedb.org/3/movie/movie-id?api_key=04c35731a5ee918f014970082a0088b1"

const Singlemovie = () => {

  const [title,setTitle] = useState([])
  const [vote_average,setvote_average] = useState([])

  const params = useParams();
  
  useEffect(() => {
    let finalUrl = Apiurl.replace("movie-id",params.id)
    fetch(finalUrl).then((res) => res.json())
      .then((data) => {
        setTitle(data.title)
        setvote_average(data.vote_average)
      })
  }, [params.id])

  return (
    <div>
    <h1>Title: {title}</h1>
    <h2>Rating: {vote_average}</h2>
    </div>
  )
}

export default Singlemovie
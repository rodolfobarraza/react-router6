import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => { 
  let params = useParams();
    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/' + params.id);

    if (loading) {
      return <h1>Cargando...</h1>
    }
  
    if (error) {
      return <h1>{ error }</h1>
    }
  
    return (
      <>
        <h1>
          { data.id } - { data.title }
        </h1>
        <p>{ data.body }</p>
        <Link to="/blog" className="btn btn-dark">Regresar</Link>
      </>
    )
  }

export default BlogDetails;
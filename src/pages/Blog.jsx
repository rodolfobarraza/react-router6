import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('title'));
  }, [searchParams]);

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Cargando...</p>
  if (error) return <p>error....</p>

  return (
    <>
      <h1>Blog</h1>
      <ul className="list-group">
      {
        data.map(item => (
          <Link key={ item.id } className="list-group-item" to={`/blog/${item.id}`}>{item.id} - { item.title }</Link>
        ))
      }
      </ul>
    </>
  )
}

export default Blog;
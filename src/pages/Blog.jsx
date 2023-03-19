import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Cargando...</p>
  if (error) return <p>error....</p>

  const handleChange = (e) => {
    let title = e.target.value;
    if (title) {
      setSearchParams({title: title})
    } else {
      setSearchParams({});
    }
  }

  return (
    <>
      <h1>Blog</h1>
      <input type="text" name="title" className="form-control my-3" onChange={handleChange} value={searchParams.get('title') || ''} />
      <ul className="list-group">
      {
        data
          .filter((item) => {
            let title = searchParams.get('title');
            if (!title) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(title.toLowerCase());
          })
          .map(item => (
          <Link key={ item.id } className="list-group-item" to={`/blog/${item.id}`}>{item.id} - { item.title }</Link>
        ))
      }
      </ul>
    </>
  )
}

export default Blog;
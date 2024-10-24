import useGenres from '../hooks/useGenres'

/* Components should not know anything about the endpoint or making http requests */
const Genrelist = () => {
    const {data} = useGenres();
  return (
    <ul>
        {data.map(data => <li key={data.id}>{data.name}</li>)}
    </ul>
  )
}

export default Genrelist
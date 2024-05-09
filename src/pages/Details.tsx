import { useGetPokemonByNameQuery } from '../services/pokemon'

function Details() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          <img src={data.sprites.front_shiny} alt={data.species.name} width="100%" />
          <ul className="divide-y-2">
            <li className="flex justify-between p-2">
              <span className="font-bold">Name</span>
              <span>{data.species.name}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-bold">Height</span>
              <span>{data.species.name}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-bold">Weight</span>
              <span>{data.species.name}</span>
            </li>
            <li className="flex justify-between p-2">
              <span className="font-bold">Types</span>
              <span>{data.species.name}</span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default Details

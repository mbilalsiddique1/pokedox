import { Link } from "react-router-dom";

import { useGetPokemonQuery } from '../services/pokemon'
import { IPokemonDetails } from '../services/types'

import { Pokemon } from '../components/Pokemon'

function Home() {
  const { data, error, isLoading } = useGetPokemonQuery({})

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          {data.results.map((poke: IPokemonDetails, index: number) => (
            <li>
              <Link to={`/pokemon/${poke.name}`}>
                <Pokemon key={index} name={poke.name} />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default Home

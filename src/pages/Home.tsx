import { Header } from "../components/Header";
import { Card } from '../components/Card'
import { useGetPokesQuery } from '../services/pokemons'
import { useAppSelector } from "../app/hooks";

function Home() {
  const pokes = useAppSelector(state => state.pokes);
  const { data, isLoading } = useGetPokesQuery()

  const pokeResults = pokes && pokes.length > 0 ? pokes : (data ? data.results : []);

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div className="grid grid-cols-3 gap-2">
            {pokeResults.map((poke: any, index: number) => (
              <Card key={index} poke={poke} />
            ))}
          </div>
        ) : null}
      </main>
    </>
  )
}

export default Home

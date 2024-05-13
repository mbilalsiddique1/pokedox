import { Link } from "react-router-dom";

import { dreamWorld } from '../../utils';
import { pokesApi } from '../../services/pokemons'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPoke } from '../../features/pokemonSlice'

export const Card = ({ poke }: { poke: any }) => {
  const currentPoke = useAppSelector((state) => selectPoke(state, poke.name));
  const dispatch = useAppDispatch();
  if ( !currentPoke ) {
    dispatch(pokesApi.endpoints.getPoke.initiate(poke.name))
  }

  return (
    <>
      {currentPoke ? (
        <Link to={`/${currentPoke.name}`} className="relative bg-white rounded-lg shadow-md">
          <div className="relative flex flex-col items-center justify-between px-2 py-1 h-full gap-2 z-10 ring-1 ring-primary/50 rounded-lg">
            <div className="w-full text-right">#{currentPoke.id}</div>

            <div className="silhouette">
              <img className='drop-shadow-md' src={dreamWorld(currentPoke.sprites.front_default)} alt={currentPoke.species.name} width="72" height="72" />
            </div>

            <div className="text-gray-dark font-semibold first-letter:capitalize">{currentPoke.name}</div>
          </div>

          <div className="absolute w-full h-1/2 bg-gray-white bottom-0 rounded-lg z-0"></div>
        </Link>
      ) : null}
    </>
  )
}

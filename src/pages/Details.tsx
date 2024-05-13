import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectPoke } from '../features/pokemonSlice'
import { pokesApi } from '../services/pokemons';
import { dreamWorld, generateAbbreviation } from '../utils'
import { Progress } from '../components/Progress';

function Details() {
  const { name } = useParams();
  const currentPoke = useAppSelector((state) => selectPoke(state, name));
  const dispatch = useAppDispatch();
  let pageColor: string = '';

  if (!currentPoke && name) {
    dispatch(pokesApi.endpoints.getPoke.initiate(name))
  }

  if (currentPoke) {
    pageColor = currentPoke && currentPoke.types[0].type.name
  }

  return (
    <>
      {currentPoke ? (
        <>
          <div className={`header header--background bg-${pageColor}`}>
            <div className='w-full flex items-center'>
              <Link to={`/`} className='flex items-center gap-2 text-white'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 48 48'
                  fill='none'
                  className="fill-white cursor-pointer"
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.35 38.95L8.45 25.05C8.28333 24.8833 8.16667 24.7167 8.1 24.55C8.03333 24.3833 8 24.2 8 24C8 23.8 8.03333 23.6167 8.1 23.45C8.16667 23.2833 8.28333 23.1167 8.45 22.95L22.4 9C22.6667 8.73333 23 8.6 23.4 8.6C23.8 8.6 24.15 8.75 24.45 9.05C24.75 9.35 24.9 9.7 24.9 10.1C24.9 10.5 24.75 10.85 24.45 11.15L13.1 22.5H37.9C38.3333 22.5 38.6917 22.6417 38.975 22.925C39.2583 23.2083 39.4 23.5667 39.4 24C39.4 24.4333 39.2583 24.7917 38.975 25.075C38.6917 25.3583 38.3333 25.5 37.9 25.5H13.1L24.5 36.9C24.7667 37.1667 24.9 37.5 24.9 37.9C24.9 38.3 24.75 38.65 24.45 38.95C24.15 39.25 23.8 39.4 23.4 39.4C23 39.4 22.65 39.25 22.35 38.95Z'
                    fill='inherit'
                  />
                </svg>
              </Link>

              <h1 className='capitalize'>{currentPoke.species.name}</h1>

              <div className="ml-auto mr-4 text-white">#{currentPoke.id}</div>
            </div>

            <div className="flex items-center justify-center w-full min-h-64 p-4">
              <img className='drop-shadow-md w-full' src={dreamWorld(currentPoke.sprites.front_default)} alt={currentPoke.species.name} />
            </div>

            <img className='absolute top-4 right-2 -z-[1] opacity-10' src='pokeball.svg' width="200" height="200" alt={currentPoke.species.name} />

            <div className='absolute -bottom-4 left-2 right-2 h-28 bg-white -z-[1] rounded-t-lg shadow-inner'></div>
          </div>

          <div className={`bg-${pageColor} h-full`}>
            <main  className='text-center flex flex-col gap-4 h-[calc(100%-1rem)]'>
              <div className="types w-full flex items-center justify-center gap-2">
                {currentPoke.types.map((type: any, index: number) => (
                  <span key={index} className={`inline-flex items-center rounded-full bg-${type.type.name} px-2 py-1 text-xs font-medium text-white capitalize`}>{type.type.name}</span>
                ))}
              </div>

              <h3 className='font-bold text-grass'>About</h3>

              <div className="incentive-box">
                <div className="incentive-box__content">
                  <div className="incentive-box__content__value">
                    <img src='/icons/weight.svg' alt='egg' width='24' height='24' />
                    {currentPoke.weight / 10} kg
                  </div>
                  <div className="incentive-box__content__title"> Weight </div>
                </div>

                <div className="incentive-box__content">
                  <div className="incentive-box__content__value">
                    <img src='/icons/straighten.svg' alt='egg' width='24' height='24' />
                    {currentPoke.height / 10} m
                  </div>
                  <div className="incentive-box__content__title">Height</div>
                </div>

                <div className="incentive-box__content">
                  <div className="incentive-box__content__value incentive-box__content__value__moves">
                    {currentPoke.moves.slice(0, 2).map((move: any, index: number) => (
                      <span key={index} className="block bg-white text-gray-dark px-2 py-1 text-sm font-medium rounded-full">{move.move.name}</span>
                    ))}
                  </div>
                  <div className="incentive-box__content__title">Moves</div>
                </div>
              </div>

              <h3 className='font-bold text-grass'>Base Stats</h3>

              <div className="base-states">
                {currentPoke.stats.map((stat: any, index: number) => (
                  <Progress
                    key={index}
                    name={generateAbbreviation(stat.stat.name)}
                    stat={stat.base_stat}
                    type={currentPoke.types[0].type.name}
                  />
                ))}
              </div>
            </main>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Details;

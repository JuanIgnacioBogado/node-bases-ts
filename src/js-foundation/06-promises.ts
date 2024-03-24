import { httpClientPlugin as http } from '../plugins';

export const getPokemonById = async (id: number | string): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const { name } = await http.get(url);
    return name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`
  }

  // const resp = await fetch( url );
  // const pokemon = await resp.json();

  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );
};

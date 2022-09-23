import React, { useEffect, useState } from "react";
import axios from "axios";
import "../stylesheet/buscador.css";

export default function Buscador() {
  // estados del fetch
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );

        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="flex flex-col h-full pt-32">
      <div className="flex items-center justify-center h-12">
        <input
          type="text"
          placeholder={"buscar personajes"}
          className="flex p-2 text-2xl text-center text-blue-400 rounded-lg"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>

      <div className="flex items-center justify-center mt-8">
        <div className="grid items-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {characters.map((character) => {
            return (
              <div
                className="flex flex-col items-center bg-gray-800 border-2 border-blue-400 border-solid rounded-lg shadow-2xl hover:translate-y-2 hover:shadow-blue-700 hover:transition-none hover:duration-300"
                key={character.id}
              >
                <img
                  className="w-full rounded-t-lg"
                  src={character.image}
                  alt={character.name}
                />
                <h1 className="text-2xl text-blue-500"> {character.name} </h1>
                <div className="flex items-center gap-3 text-center ">
                  <div className="grid grid-cols-2 gap-2">
                    <h2 className="text-xl text-cyan-300"> Especie: </h2>
                    <h2 className="text-xl text-orange-600">
                      {character.species === "Human" ? (
                        <span className="human"> Humano </span>
                      ) : (
                        <span className="alien"> Alien </span>
                      )}
                    </h2>
                    <h3 className="text-xl text-cyan-300"> Estado: </h3>
                    <h3 className="text-xl">
                      {character.status === "Alive" ? (
                        <span className="alive"> Vivo </span>
                      ) : (
                        <span className="dead"> Muerto </span>
                      )}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

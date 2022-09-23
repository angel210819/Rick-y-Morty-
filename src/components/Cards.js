import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const url = `https://rickandmortyapi.com/api/character/1,2,3,4,5`;
  const [card, setCard] = useState([]);

  const fetchApi = async (url) => {
    const res = await fetch(url);
    const JSON = await res.json();
    setCard(JSON);
  };

  useEffect(() => {
    fetchApi(url);
  }, [url]);

  
  return (
    <section id="" className="flex flex-col items-center">
      <div className="flex items-center mt-32 text-2xl text-yellow-600">
        PERSONAJES PRINCIPALES
      </div>
      <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-3 lg:grid-cols-5 ">
        {!card
          ? "Loading"
          : card.map((item) => {
              return (
                <div
                  className="flex flex-col items-center bg-gray-800 shadow-2xl rounded-2xl hover:translate-y-2 hover:transition-none hover:duration-300 hover:shadow-blue-500 "
                  key={item.id}
                >
                  <img
                    className="rounded-t-2xl"
                    src={item.image}
                    alt="personajes"
                  />
                  <h1 className="text-2xl font-medium text-blue-500">
                    {item.name}
                  </h1>
                  <h2 className="text-xl text-green-400"> {item.species} </h2>
                </div>
              );
            })}
      </div>

      <button className="p-4 mt-10 text-xl text-green-400 bg-blue-500 rounded-xl hover:bg-gray-500">
        <Link to="/personajes">VER MAS</Link>
      </button>
    </section>
  );
};

export default Cards;

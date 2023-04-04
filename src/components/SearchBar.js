import svg from "../assets/svg_gym.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function SearchBar() {
  const [exercises, setExercises] = useState([]);
  const [exFilter, setExFilter] = useState("");
  const [filtro, setFiltro] = useState([]);
  const [teste, setTeste] = useState();

  let filtered;

  useEffect(() => {
    async function Fetch() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/exercises/4"
        );
        setExercises(response.data.data.attributes.data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("acabou fetch");
      }
    }
    Fetch();
  }, []);
  return (
    <div>
      <img src={svg} />
      <h1>Procure pela parte do corpo</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setExFilter(teste);
          console.log(exFilter);
        }}
      >
        <input
          onChange={(e) => {
            setTeste(e.target.value);
          }}
          value={teste}
        />

        {/* {filtro.map((item) => {
            return (
              <img src={item.gifUrl} alt="eee" style={{ width: "10px" }} />
            );
          })} */}
        <button
          type="submition"
          href="#exercises"
          onClick={() => {
            const result = exercises.filter((item) =>
              item.bodyPart.includes(exFilter)
            );
            setFiltro(result);
            console.log(result);
          }}
        >
          Conheça os exercícios
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

import { Button } from "@mui/material";
import style from "./HeroBanner.module.css";
import HeroImg from "../assets/HeroImg.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

function HeroBanner() {
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
    <div className={style.heroWrapper}>
      <div className={style.title}>
        <h1>Fitness App</h1>
        <h3>
          Eat, Train, Sleep <br />
          and REPEAT
        </h3>
        <h4>Confira os melhores exercícios para cada grupo muscular!</h4>
        <Button variant="contained" color="error" href="#exercises">
          Conheça os exercícios
        </Button>
      </div>
      <div>
        <img src={HeroImg} alt="err" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setExFilter(teste);
          }}
        >
          <label>Filtro</label>
          <input
            onChange={(e) => {
              setTeste(e.target.value);
            }}
            value={teste}
          />

          <button
            onClick={() => {
              const result = exercises.filter((item) =>
                item.bodyPart.includes(exFilter)
              );
              setFiltro(result);
              console.log(result);
            }}
          >
            buscar
          </button>
          {filtro.map((item) => {
            return (
              <img src={item.gifUrl} alt="eee" style={{ width: "10px" }} />
            );
          })}
        </form>
      </div>
    </div>
  );
}

export default HeroBanner;

// onClick={() => {
//     exercises.map((item) => {
//       if (item.bodyPart.includes(teste)) {
//         setFiltro(item);
//       }
//     });
//   }}
// onClick={() => {
//     const result = exercises.filter(item => item.bodyPart.includes(exFilter))
// }

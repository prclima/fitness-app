import svg from "../assets/svg_gym.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Exercises from "./Exercises";
import style from "./SearchBar.module.css";

function SearchBar() {
  const [exercises, setExercises] = useState([]);
  const [exFilter, setExFilter] = useState("");
  const [filtro, setFiltro] = useState([]);
  const [teste, setTeste] = useState();

  const [bodypart, setBodyPart] = useState([]);

  useEffect(() => {
    async function FetchEx() {
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
    FetchEx();
  }, []);

  useEffect(() => {
    async function FetchBodyPart() {
      try {
        const response = await axios.get("http://localhost:1337/api/bodyparts");
        setBodyPart(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("acabou bodypart");
      }
    }
    FetchBodyPart();
  }, []);

  return (
    <>
      <div className={style.bodyPartWrapper}>
        <h1>Escolha seu músculo alvo</h1>

        <div className={style.bodyPart_div}>
          {bodypart.data?.map((part) => {
            return (
              <button
                onClick={() => {
                  const result = exercises.filter((item) =>
                    item.bodyPart.includes(part.attributes.part_name)
                  );
                  setFiltro(result);
                  console.log(result);
                }}
              >
                <img src={svg} />
                <h4>{part.attributes.part_name}</h4>
              </button>
            );
          })}
        </div>
      </div>
      <Exercises filtro={filtro} />
    </>
  );
}

export default SearchBar;

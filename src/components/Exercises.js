import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import style from "./Exercises.module.css";

function Exercises({ filtro }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exPerPage = 9;

  const indexOfLastExercise = currentPage * exPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exPerPage;

  const currentExercises = filtro.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.ex}>
          {currentExercises.map((item) => {
            return (
              <div className={style.card}>
                <img src={item.gifUrl} alt="eee" style={{ width: "190px" }} />
                <h4>{item.name}</h4>
                <p>
                  Target <span>{item.target}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Stack mt="100px" alignItems="center">
        <Pagination
          color="standard"
          shape="rounded"
          count={Math.ceil(filtro.length / exPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </>
  );
}

export default Exercises;

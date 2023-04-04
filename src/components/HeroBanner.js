import style from "./HeroBanner.module.css";
import HeroImg from "../assets/hero2.jpg";

function HeroBanner() {
  return (
    <div className={style.heroWrapper}>
      <div className={style.title}>
        <div className={style.blur}></div>
        <h1>
          Descubra <br />
          o Poder <br />
          Do Exercício
        </h1>

        <h4>
          Confira os melhores exercícios <br />
          para cada grupo muscular
        </h4>

        <div className={style.span}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={style.spanTitle}>
              9000 <span className={style.signal}>+</span>
            </span>
            <span className={style.desc}>Alunos</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <span className={style.spanTitle}>
              1300 <span className={style.signal}>+</span>
            </span>

            <span className={style.desc}>Exercícios</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={style.spanTitle}>
              98% <span className={style.signal}>+</span>
            </span>

            <span className={style.desc}>Avaliações Positivas</span>
          </div>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="err" />
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

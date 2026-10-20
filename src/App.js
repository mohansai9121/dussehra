import Home from "./Components/Home/Home";
import celebration1 from "./assets/celebration.json";
import celebration2 from "./assets/Celelebration2.json";
import "./App.css";
import { Lottie } from "lottie-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import HomeEn from "./Components/Home/HomeEn";

const App = () => {
  const [lang, setLang] = useState("tel");
  const [lottie, setLottie] = useState("l1");
  const lottie1Ref = useRef();
  const lottie2Ref = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (lottie === "l1") {
        lottie1Ref.current?.play();
        setLottie("l2");
      } else {
        lottie2Ref.current?.play();
        setLottie("l1");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [lottie]);

  return (
    <div>
      <div className="lottie1">
        <Lottie
          src={celebration1}
          style={{ width: "100%", height: "100%" }}
          lottieRef={lottie1Ref}
        />
      </div>
      <div className="lottie2">
        <Lottie
          src={celebration2}
          style={{ width: "100%", height: "100%" }}
          lottieRef={lottie2Ref}
        />
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={lang!=="tel"?"telugu-button":"telugu-button-selected"}
        onClick={() => setLang("tel")}
      >
        తెలుగు
      </motion.button>
      <motion.button
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={lang!=="eng"?"english-button":"english-button-selected"}
        onClick={() => {
          setLang("eng");
        }}
      >
        English
      </motion.button>
      {lang === "tel" && <Home />}
      {lang === "eng" && <HomeEn />}
      <br />
      <br />
    </div>
  );
};

export default App;

import { useState } from "react";
import "./Home.css";
import { AnimatePresence, motion } from "motion/react";
import day1 from "../../assets/day1.jpg";
import day2 from "../../assets/day2.jpg";
import day3 from "../../assets/day3.jpg";
import day4 from "../../assets/day4.png";
import day5 from "../../assets/day5.jpg";
import day6 from "../../assets/day6.jpg";
import day7 from "../../assets/day7.jpg";
import day8 from "../../assets/day8.jpg";
import day9 from "../../assets/day9.png";
import day10 from "../../assets/day10.jpg";

const Home = () => {
  const [day, setDay] = useState(0);

  const days = [
    "పాడ్యమి",
    "విదియ",
    "తదియ",
    "చవితి",
    "పంచమి",
    "షష్ఠి",
    "సప్తమి",
    "అష్టమి",
    "నవమి",
    "దశమి",
  ];
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="heading"
        onClick={() => setDay(0)}
      >
        దసరా (విజయదశమి)
      </motion.h1>
      <div className="days-buttons">
        {days.map((days, id) => {
          return (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className= {day!==id+1 ? "days-button":"days-button-selected"}
                key={id}
                onClick={() => setDay(id + 1)}
              >
                {days}
              </motion.button>
            </>
          );
        })}
      </div>
      <AnimatePresence>
        {day === 0 && (
          <div className="info">
            <section>
              <p>
                దసరా (విజయదశమి) పండుగను చెడుపై మంచి సాధించిన విజయానికి గుర్తుగా,
              </p>
              <p>
                ఆశ్వయుజ శుద్ధ పాడ్యమి నుండి నవమి వరకు తొమ్మిది రోజులు దేవీ
                నవరాత్రులు జరుపుకుని,
              </p>
              <p>10వ రోజు విజయదశమిగా జరుపుకుంటాము.</p>
            </section>
            <hr className="line" />
            <section>
              <h2>మహిషాసుర మర్దనం</h2>
              <p>
                బ్రహ్మదేవుని వరాలతో గర్వితుడైన మహిషాసురుడు అనే రాక్షసుడు దేవతలను
                ఓడించి ఇంద్రపదవిని ఆక్రమిస్తాడు.
              </p>
              <p>
                దేవతల మొరను విన్న త్రిమూర్తులు తమ తేజస్సుతో శక్తి స్వరూపిణి అయిన
                దుర్గాదేవిని సృష్టిస్తారు.
              </p>
              <p>
                అమ్మవారు శివుని శూలం, విష్ణువు చక్రం, ఇంద్రుని వజ్రాయుధం వంటి
                దివ్యాస్త్రాలతో మహిషాసురుడితో తొమ్మిది రాత్రులు భీకరంగా పోరాడి,
                పదవ రోజున అతన్ని వధిస్తుంది. ఈ విజయమే విజయదశమి.
              </p>
            </section>
            <hr className="line" />
            <section>
              <h2>శ్రీరామ రావణ యుద్ధం</h2>
              <p>
                త్రేతా యుగంలో సీతాన్వేషణలో భాగంగా శ్రీరాముడు రావణాసురుడితో
                యుద్ధం చేస్తాడు
              </p>
              <p>ఆశ్వయుజ శుద్ధ దశమి రోజున రావణుడిని సంహరిస్తాడు</p>
              <p>
                అధర్మంపై ధర్మం గెలిచిన ఈ సందర్భాన్ని కూడా పండుగగా ఆచరిస్తాము
              </p>
            </section>
            <hr className="line" />
            <section>
              <h2>పాండవుల శమీ పూజ</h2>
              <p>
                మహాభారత కాలంలో పాండవులు తమ అజ్ఞాతవాసం ముగిసే సమయంలో, జమ్మి
                చెట్టు (శమీ వృక్షం)పై దాచిన తమ ఆయుధాలను విజయదశమి రోజునే తిరిగి
                తీసుకుంటారు
              </p>
            </section>
          </div>
        )}
        {day === 1 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ బాలా త్రిపుర సుందరీ దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: లేత గులాబీ
                <span
                  className="color-span"
                  style={{ backgroundColor: "lightpink" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day1}
                alt="శ్రీ బాలా త్రిపుర సుందరీ దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                చలిమిడి, వడపప్పు, పాయసం
              </p>
            </div>
          </div>
        )}
        {day === 2 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ గాయత్రీ దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: నారింజ
                <span
                  className="color-span"
                  style={{ backgroundColor: "orange" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day2}
                alt="శ్రీ గాయత్రీ దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                తీపి బూందీ, శెనగలు
              </p>
            </div>
          </div>
        )}
        {day === 3 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ అన్నపూర్ణా దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: పసుపు
                <span
                  className="color-span"
                  style={{ backgroundColor: "yellow" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day3}
                alt="శ్రీ అన్నపూర్ణా దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                రవ్వ కేసరి, పులిహోర
              </p>
            </div>
          </div>
        )}
        {day === 4 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ మహాచండీ దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>రంగు: అధికారికంగా నిర్ధారించాలి</p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day4}
                alt="శ్రీ మహాచండీ దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                పొంగలి
              </p>
            </div>
          </div>
        )}
        {day === 5 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ లలితా త్రిపుర సుందరీ దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: బంగారు రంగు
                <span
                  className="color-span"
                  style={{ backgroundColor: "gold" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day5}
                alt="శ్రీ లలితా త్రిపుర సుందరీ దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                పులిహోర, పెసర బూరెలు
              </p>
            </div>
          </div>
        )}
        {day === 6 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ సరస్వతీ దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: తెలుపు
                <span
                  className="color-span"
                  style={{ backgroundColor: "white" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day6}
                alt="శ్రీ సరస్వతీ దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                క్షీరాన్నం
              </p>
            </div>
          </div>
        )}
        {day === 7 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ మహాలక్ష్మీ దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: గులాబీ
                <span
                  className="color-span"
                  style={{ backgroundColor: "pink" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day7}
                alt="శ్రీ మహాలక్ష్మీ దేవిి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                అటుకులు, బెల్లం, శనగపప్పు, కొబ్బరి
              </p>
            </div>
          </div>
        )}
        {day === 8 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ దుర్గాదేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: ఎరుపు
                <span
                  className="color-span"
                  style={{ backgroundColor: "red" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day8}
                alt="శ్రీ దుర్గాదేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                గారెలు, నిమ్మరసం కలిపిన అల్లం ముక్కలు
              </p>
            </div>
          </div>
        )}
        {day === 9 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ మహిషాసురమర్దిని దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: గోధుమ / ఎరుపు
                <span
                  className="color-span"
                  style={{ backgroundColor: "brown" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day9}
                alt="శ్రీ మహిషాసురమర్దిని దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                చక్రపొంగలి
              </p>
            </div>
          </div>
        )}
        {day === 10 && (
          <div className="day-outer-div">
            <div>
              <h2>శ్రీ రాజరాజేశ్వరి దేవి</h2>
            </div>
            <div className="day-inner-div">
              <p>
                రంగు: ఆకుపచ్చ
                <span
                  className="color-span"
                  style={{ backgroundColor: "green" }}
                ></span>
              </p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day10}
                alt="శ్రీ రాజరాజేశ్వరి దేవి"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  నైవేద్యములు:
                </span>{" "}
                పులిహోర, గారెలు
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

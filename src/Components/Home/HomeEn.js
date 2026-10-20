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

const HomeEn = () => {
  const [day, setDay] = useState(0);

  const days = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
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
        Dasara (Vijayadashami)
      </motion.h1>
      <div className="days-buttons">
        {days.map((days, id) => {
          return (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={
                  day !== id + 1 ? "days-button" : "days-button-selected"
                }
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
                Dussehra (Vijayadasami) festival is celebrated to mark the
                victory of good over evil,
              </p>
              <p>
                Devi Navratri is celebrated for nine days from Ashvayuja Suddha
                Padyami to Navami,
              </p>
              <p>we celebrate the 10th day as Vijayadashami.</p>
            </section>
            <hr className="line" />
            <section>
              <h2>The Slaying of Mahishasura</h2>
              <p>
                Emboldened by boons from Lord Brahma, a demon named Mahishasura
                defeats the gods and seizes the position of Indra.
              </p>
              <p>
                Hearing the plea of ​​the gods, the Trimurti—through their own
                radiance—create Goddess Durga, the embodiment of divine power
                (Shakti).
              </p>
              <p>
                Armed with divine weapons—such as Shiva’s trident, Vishnu’s
                discus, and Indra’s thunderbolt—the Goddess fought a fierce
                battle against Mahishasura for nine nights, and on the tenth
                day, she slew him. This victory is what we celebrate as
                Vijayadashami.
              </p>
            </section>
            <hr className="line" />
            <section>
              <h2>The War Between Sri Rama and Ravana</h2>
              <p>
                In the Treta Yuga, as part of the search for Sita, Lord Rama
                wages war against Ravanasura.
              </p>
              <p>On the day of Ashwayuja Shuddha Dashami, he slays Ravana.</p>
              <p>
                We also celebrate this occasion—where righteousness triumphed
                over unrighteousness—as a festival.
              </p>
            </section>
            <hr className="line" />
            <section>
              <h2>The Pandavas' Shami Puja</h2>
              <p>
                During the time of the Mahabharata, as their period of living
                incognito (ajnatavasa) was drawing to a close, the Pandavas
                retrieved the weapons they had hidden in a Jammi tree (Shami
                tree) on the day of Vijayadashami.
              </p>
            </section>
          </div>
        )}
        {day === 1 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Bala Tripura Sundari Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Light pink
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
                alt="Sri Bala Tripura Sundari Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Chalimidi, vadapappu, payasam
              </p>
            </div>
          </div>
        )}
        {day === 2 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Gayatri Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Orange
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
                alt="Sri Gayatri Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Sweet boondi, chickpeas
              </p>
            </div>
          </div>
        )}
        {day === 3 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Annapurna Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Yellow
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
                alt="Sri Annapurna Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Rava Kesari, Pulihora
              </p>
            </div>
          </div>
        )}
        {day === 4 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Maha Chandi Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>Color: To be officially confirmed</p>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={day4}
                alt="Sri Maha Chandi Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Pongali
              </p>
            </div>
          </div>
        )}
        {day === 5 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Lalita Tripura Sundari Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Gold
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
                alt="Sri Lalita Tripura Sundari Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Pulihora (Tamarind Rice), Pesara Boorelu (Mung Dal Fritters)
              </p>
            </div>
          </div>
        )}
        {day === 6 && (
          <div className="day-outer-div">
            <div>
              <h2>Goddess Saraswati</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: White
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
                alt="Goddess Saraswati"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Ksheerannam (Milk-Rice Pudding)
              </p>
            </div>
          </div>
        )}
        {day === 7 && (
          <div className="day-outer-div">
            <div>
              <h2>Goddess Sri Mahalakshmi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Pink
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
                alt="Goddess Sri Mahalakshmi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Flattened rice, jaggery, split chickpeas, coconut
              </p>
            </div>
          </div>
        )}
        {day === 8 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Durga Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Red
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
                alt="Sri Durga Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Vadas and ginger pieces mixed with lemon juice
              </p>
            </div>
          </div>
        )}
        {day === 9 && (
          <div className="day-outer-div">
            <div>
              <h2>Goddess Sri Mahishasuramardini</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Brown / Red
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
                alt="Goddess Sri Mahishasuramardini"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Chakkara Pongali
              </p>
            </div>
          </div>
        )}
        {day === 10 && (
          <div className="day-outer-div">
            <div>
              <h2>Sri Rajarajeswari Devi</h2>
            </div>
            <div className="day-inner-div">
              <p>
                Color: Green
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
                alt="Sri Rajarajeswari Devi"
                className="day-image"
              />
              <p>
                <span style={{ display: "block", marginBottom: "5px" }}>
                  Offerings:
                </span>{" "}
                Pulihora, Vadas
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeEn;

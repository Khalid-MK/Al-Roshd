import slider1 from "../../../assets/images/general-hero-slide-desktop.svg";
import slider2 from "../../../assets/images/Quran-desktop-slider.svg";
import slider3 from "../../../assets/images/Arabic-language-desktop-slider.svg";
import slider4 from "../../../assets/images/Islamic-studies-desktop-slider.svg";
import { Carousel } from "antd";
import styles from "./index.module.css";
import { Button } from "antd";

const HomeCarousel = () => {
  return (
    <Carousel autoplay autoplaySpeed={2000}>
      <div>
        <div
          className={styles.slider}
          style={{ backgroundImage: `url(${slider1})` }}
        >
          <div>
            <h3>Online Quran, Arabic &amp; Islamic Studies Courses</h3>
            <p>
              Your Quran, Tajweed, Arabic &amp; Islamic Studies Journey
              <br />
              starts here with Mishkah Academy.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${styles.slider} ${styles.slider2}`}
          style={{ backgroundImage: `url(${slider2})` }}
        >
          <div>
            <h3>Online Quran Courses</h3>
            <p>
              Strengthen your connection with the Holy Quran by joining our
              online Quran courses, i.e. Quran Memorization, Quran Recitation,
              Tajweed, Ijazah and 10 Qiraat.
            </p>
            <Button type="primary" className={`${styles.btn}`}>
              {"Learn More"}
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${styles.slider} ${styles.slider2}`}
          style={{ backgroundImage: `url(${slider4})` }}
        >
          <div>
            <h3>Online Islamic Studies Courses</h3>
            <p>
              Get connected with your Islamic roots with the help of our Islamic
              Studies Courses that cover all the essential topics such as
              Tafseer, Fiqh, Aqeedah Hadith, Akhlaq, Azkar, and others.
            </p>
            <Button type="primary" className={`${styles.btn}`}>
              {"Learn More"}
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${styles.slider} ${styles.slider2}`}
          style={{ backgroundImage: `url(${slider3})` }}
        >
          <div>
            <h3>Online Arabic Courses</h3>
            <p>
              Learn To Read, Write, Speak and Understand Arabic with the help of
              expert native Arabic tutors. Arabic learning online courses are
              designed to cater to the needs of every student.
            </p>
            <Button type="primary" className={`${styles.btn}`}>
              {"Learn More"}
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;

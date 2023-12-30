import { Flex, Row } from "antd";
import { Button } from "antd";
import styles from "./index.module.css";
import EqualParts from "../../../components/Layout/Components/EqualParts";

const LearnOnline = () => {
  const firstComp = (
    <Row gutter={[0, 16]} justify={"center"} align={"middle"}>
      <Flex vertical align="center" gap={"3rem"}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/hJ3fCtKf4fA?si=frSmRNBH57JLAVYk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Flex>
    </Row>
  );
  const secondComp = (
    <Row
      justify={"start"}
      align={"bottom"}
      className={styles.textContainer}
      gutter={[0, 16]}
    >
      <section>
        <Flex vertical gap={"1.5rem"} className={styles.section}>
          <h2>Learn Quran Online | Online Quran Classes</h2>
          <p>
            Mishkah Academy is very blessed and proud to be serving thousands of
            Muslim families around the World i.e. USA, UK, Canada, Australia,
            Europe, Asia & Africa. Join the thousands of Muslim families who
            love learning Quran, Tajweed, Arabic & Islamic Studies Online from
            the comfort of their homes with 100% satisfaction. Mishkah Academy
            has become one of the leading online Islamic schools in the World
            due to its good reputation for many years in Online Quran learning
            Classes.
          </p>
          <Button type="primary" className={`${styles.btn}`}>
            {"See All Courses"}
          </Button>
        </Flex>
      </section>
    </Row>
  );

  return (
    <EqualParts
      className={styles.container}
      firstComp={firstComp}
      secondComp={secondComp}
    />
  );
};

// const LearnOnline = () => {
//   return (
//     <Row wrap className={styles.container}>
//       <Col
//         push={underXXlcontainerSpace}
//         lg={12}
//         md={24}
//         className={styles.videoContainer}
//       >
//         <iframe
//           width="400"
//           height="240"
//           src="https://www.youtube.com/embed/hJ3fCtKf4fA?si=frSmRNBH57JLAVYk"
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         ></iframe>
//       </Col>
//       <Col pull={underXXlcontainerSpace} lg={12} md={24}>
//         <section>
//           <Flex vertical gap={"1.5rem"} className={styles.section}>
//             <h2>Learn Quran Online | Online Quran Classes</h2>
//             <p>
//               Mishkah Academy is very blessed and proud to be serving thousands
//               of Muslim families around the World i.e. USA, UK, Canada,
//               Australia, Europe, Asia & Africa. Join the thousands of Muslim
//               families who love learning Quran, Tajweed, Arabic & Islamic
//               Studies Online from the comfort of their homes with 100%
//               satisfaction. Mishkah Academy has become one of the leading online
//               Islamic schools in the World due to its good reputation for many
//               years in Online Quran learning Classes.
//             </p>
//             <Button type="primary" className={`${styles.btn}`}>
//               {"See All Courses"}
//             </Button>
//           </Flex>
//         </section>
//       </Col>
//     </Row>
//   );
// };

export default LearnOnline;

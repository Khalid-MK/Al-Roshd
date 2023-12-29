import { Flex, Row } from "antd";
import styles from "./index.module.css";
import { Button } from "antd";
import stepsImage from "../../../assets//images/vite.svg";
import EqualParts from "../../../components/Layout/Components/EqualParts";
import { useAppSelector } from "../../../store/hooks";
import { padding } from "../../../globalVariables";

const HomeSteps = () => {
  const direction = useAppSelector((state) => state.direction.value);
  const firstComp = (
    <Row
      gutter={[0, 16]}
      justify={"center"}
      align={"middle"}
      className={styles.imageSection}
    >
      <Flex vertical align="center">
        <div className={styles.imgContainer}>
          <img src={stepsImage} alt="" />
        </div>
      </Flex>
    </Row>
  );
  const secondComp = (
    <Row
      justify={"start"}
      align={"bottom"}
      style={{
        paddingLeft: direction === "ltr" ? `${padding}rem` : "unset",
        paddingRight: direction === "rtl" ? `${padding}rem` : "unset",
      }}
      className={styles.textContainer}
      gutter={[0, 16]}
    >
      <Flex vertical gap={"2rem"} className={styles.textSection}>
        <h2>3 Simple Steps To Start</h2>
        <ul>
          <li>
            <div>1</div>
            <p>Fill in the Trial Form below.</p>
          </li>
          <li>
            <div>2</div>
            <p>Book your Free Trial Class.</p>
          </li>
          <li>
            <div>3</div>
            <p>Choose Your Study Plan.</p>
          </li>
        </ul>
        <Button type="primary" className={`${styles.btn}`}>
          {"Book a Free Trial Now "}
        </Button>
      </Flex>
    </Row>
  );

  return <EqualParts firstComp={firstComp} secondComp={secondComp} />;
};
// const HomeSteps = () => {
//   return (
//     <Row className={styles.conatiner}>
//       <Col md={12} className={styles.imgSection}>
//         <div className={styles.imgContainer}>
//           <img width={"100%"} src={stepsImage} alt="" />
//         </div>
//       </Col>

//       <Col md={12} className={styles.textSection}>
//         <Flex vertical gap={"2rem"}>
//           <h2>3 Simple Steps To Start</h2>
//           <ul>
//             <li>
//               <div>1</div>
//               <p>Fill in the Trial Form below.</p>
//             </li>
//             <li>
//               <div>2</div>
//               <p>Book your Free Trial Class.</p>
//             </li>
//             <li>
//               <div>3</div>
//               <p>Choose Your Study Plan.</p>
//             </li>
//           </ul>
//           <Button type="primary" className={`${styles.btn}`}>
//             {"Book a Free Trial Now "}
//           </Button>
//         </Flex>
//       </Col>
//     </Row>
//   );
// };

export default HomeSteps;

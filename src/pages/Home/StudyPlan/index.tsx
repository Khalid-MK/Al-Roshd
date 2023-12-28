import { Button, Flex, Row } from "antd";
import EqualParts from "../../../components/Layout/Components/EqualParts";
import styles from "./index.module.css";
import StudyPlanImg from "../../../assets/images/study-plan.svg";
import CheckMark from "../../../assets/svgs/CheckMark";
import { topBottomPadding } from "../../../globalVariables";
import { useAppSelector } from "../../../store/hooks";

const StudyPlan = () => {
  const direction = useAppSelector((state) => state.direction.value);

  const firtComp = (
    <Row
      gutter={[0, 16]}
      justify={"center"}
      align={"middle"}
      className={styles.imageSection}
    >
      <Flex vertical align="center" gap={"3rem"}>
        <h2>Choose Your Study Plan</h2>
        <div className={styles.imgContainer}>
          <img src={StudyPlanImg} alt="StudyPlanImg" />
        </div>
      </Flex>
    </Row>
  );
  const secondComp = (
    <Row
      justify={"start"}
      align={"bottom"}
      style={{
        paddingLeft: direction === "ltr" ? `${topBottomPadding}rem` : "unset",
        paddingRight: direction === "rtl" ? `${topBottomPadding}rem` : "unset",
      }}
      className={styles.textContainer}
      gutter={[0, 16]}
    >
      <Flex vertical gap={"2rem"}>
        <ul>
          <li>
            <CheckMark size="7%" color="--global-color-accent" isColorCssVar />

            <span>High Quality & Low Fees</span>
          </li>
          <li>
            <CheckMark size="7%" color="--global-color-accent" isColorCssVar />

            <span>Up To 20% Discount Now</span>
          </li>
          <li>
            <CheckMark size="7%" color="--global-color-accent" isColorCssVar />

            <span>$8 Instead Of $10 Per Hour</span>
          </li>
          <li>
            <CheckMark size="7%" color="--global-color-accent" isColorCssVar />

            <span>Starting From $40 Monthly</span>
          </li>
        </ul>

        <Button
          type="primary"
          size="large"
          className={`buttonStyle1 gBGTransition`}
        >
          {"See All Pricing Plans"}
        </Button>
      </Flex>
    </Row>
  );

  return <EqualParts firstComp={firtComp} secondComp={secondComp} />;
};

export default StudyPlan;

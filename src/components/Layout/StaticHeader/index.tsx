import { containerSpace } from "../../../globalVariables";
import SocialMediaSVGIcon from "../../../assets/svgs/SocialMediaSVGIcon";
import styles from "./index.module.css";
import LanguageDropdown from "./LanguageDropdown";

import { Button } from "antd";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const StaticHeader = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Row justify="space-between" align="middle" wrap>
        <Col push={containerSpace}>
          <Button type="primary" className={`${styles.btn} gBGTransition`}>
            {t("BookAFreeTrialClass")}
          </Button>
        </Col>
        <Col pull={containerSpace} className={styles.iconContainer}>
          <LanguageDropdown />
          <a
            href="javascript void(0)"
            className={`${styles.iconWrapper} gBGTransition `}
          >
            <SocialMediaSVGIcon
              type="facebook"
              color="--primary-color"
              isColorCssVar
              size="25"
            />
          </a>
          <a
            href="javascript void(0)"
            className={`${styles.iconWrapper} gBGTransition`}
          >
            <SocialMediaSVGIcon
              type="twitter"
              color="--primary-color"
              isColorCssVar
              size="25"
            />
          </a>
          <a
            href="javascript void(0)"
            className={`${styles.iconWrapper} gBGTransition`}
          >
            <SocialMediaSVGIcon
              type="whatsapp"
              color="--primary-color"
              isColorCssVar
              size="25"
            />
          </a>
          <a
            href="javascript void(0)"
            className={`${styles.iconWrapper} gBGTransition`}
          >
            <SocialMediaSVGIcon
              type="telegram"
              color="--primary-color"
              isColorCssVar
              size="25"
            />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default StaticHeader;

import { useState, useRef, useEffect } from "react";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { BackwardOutlined } from "@ant-design/icons";

import styles from "./index.module.css";
import SocialMediaSVGIcon from "../../../assets/svgs/SocialMediaSVGIcon";
import { containerSpace } from "../../../globalVariables";

const StickyFooter = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState("");
  useEffect(() => {
    if (footerRef.current) {
      const elementHeight = footerRef.current.offsetHeight;
      setFooterHeight(`${elementHeight}px`);
    }
  }, []);

  return (
    <>
      <nav style={{ height: footerHeight }}></nav>
      <nav ref={footerRef} className={`${styles.footer} ${styles.sticky}`}>
        <Row justify="space-between" align="middle" wrap>
          <Col push={containerSpace}>
            <a href="javascript void(0)" className={`${styles.iconWrapper}`}>
              <SocialMediaSVGIcon
                type="whatsapp"
                color="white"
                isColorCssVar={false}
                size="25"
              />
            </a>
          </Col>
          <Col>
            <Button
              type="primary"
              size="large"
              className={`${styles.btn} gBGTransition`}
            >
              {t("BookAFreeTrialNow")}
            </Button>
          </Col>
          <Col pull={containerSpace}>
            <a href="javascript void(0)" className={`${styles.iconWrapper}`}>
              <BackwardOutlined className={styles.upIcon} />
            </a>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default StickyFooter;

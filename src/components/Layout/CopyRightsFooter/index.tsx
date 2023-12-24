import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

const CopyRightsFooter = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <Row justify="center" align="middle" wrap>
        <Col>
          <p>{t("CopyRightsFooter")}</p>
        </Col>
      </Row>
    </nav>
  );
};

export default CopyRightsFooter;

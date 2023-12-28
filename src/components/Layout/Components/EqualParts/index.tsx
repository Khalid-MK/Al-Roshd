import { Col, Row } from "antd";
import {
  topBottomPadding,
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../../globalVariables";
import { FC } from "react";
import { IEqualParts } from "../../../../shared/interfaces";

const EqualParts: FC<IEqualParts> = ({ firstComp, secondComp }) => {
  return (
    <Row
      justify="space-between"
      style={{ padding: `${topBottomPadding}rem 0` }}
      gutter={[0, 30]}
    >
      <Col
        // style={{ backgroundColor: "red" }}
        xxl={{ span: 9, push: xxlContainerSpace, pull: 0 }}
        xl={{ span: 10, push: underXXlcontainerSpace, pull: 0 }}
        lg={{ span: 10, push: underXXlcontainerSpace, pull: 0 }}
        md={{
          span: 10,
          push: underXXlcontainerSpace,
          pull: 0,
        }}
        sm={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
        xs={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
      >
        {firstComp}
      </Col>
      <Col
        // style={{ backgroundColor: "blue" }}
        xxl={{ span: 9, push: 0, pull: xxlContainerSpace }}
        xl={{ span: 10, push: 0, pull: underXXlcontainerSpace }}
        lg={{ span: 10, push: 0, pull: underXXlcontainerSpace }}
        md={{ span: 10, push: 0, pull: underXXlcontainerSpace }}
        sm={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
        xs={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
      >
        {secondComp}
      </Col>
    </Row>
  );
};

export default EqualParts;

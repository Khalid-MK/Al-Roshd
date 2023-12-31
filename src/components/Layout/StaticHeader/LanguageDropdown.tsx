import type { MenuProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Dropdown, Flex, Space } from "antd";

import { useAppDispatch } from "../../../store/hooks";
import { changeDirection } from "../../../store/features/DirectionSlice";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const dispacth = useAppDispatch();

  const items: MenuProps["items"] = [
    {
      label: "EN",
      key: "0",
      onClick: () => changeLanguage("en"),
    },
    {
      label: "AR",
      key: "1",
      onClick: () => changeLanguage("ar"),
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    lng === "ar"
      ? dispacth(changeDirection("rtl"))
      : dispacth(changeDirection("ltr"));
  };

  return (
    <Flex align="center">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <GlobalOutlined style={{ fontSize: "25px", color: "black" }} />
            {/* <DownOutlined style={{ fontSize: "25px", color: "black" }} /> */}
          </Space>
        </a>
      </Dropdown>
    </Flex>
  );
};

export default LanguageDropdown;

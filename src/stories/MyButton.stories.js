import ButtonTemplate from "./MyButton.html?raw";
import "./MyButton.scss";

export default {
  title: "MyButton",
  tags: ["autodocs"]
};

export const MyButton = () => {
  // ボタンコンポーネントの表示
  return ButtonTemplate;
};

import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import BasicInfo from "./BasicInfo";
import Interests from "./Interests";
import Languages from "./Languages";
import DWorkEducation from "./DWorkEducation";
import ReLocation from "./ReLocation";
import "./ButtonGroup.css";

const button = [
  "Basic info",
  "Location",
  "Work And Education",
  "Interests",
  "Languages",
];
const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <BasicInfo />;
      break;
    case 1:
      return <ReLocation />;
      break;
    case 2:
      return <DWorkEducation />;
      break;
    case 3:
      return <Interests />;
      break;
    case 4:
      return <Languages />;
      break;

    default:
      break;
  }
};
const BoxSid = () => {
  const [isSelectade, setIsSelectade] = useState(0);
  return (
    <div className="box flex">
      <div>
        <ButtonGroup
          buttons={button}
          isSelectade={isSelectade}
          setIsSelectade={setIsSelectade}
        ></ButtonGroup>
      </div>
      <div className="SideTex">
        <RenderComponent index={isSelectade} />
      </div>
    </div>
  );
};

export default BoxSid;

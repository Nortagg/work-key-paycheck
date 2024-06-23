import React, { useState } from "react";
import "./florm.styles.scss";
import { FaLock, FaUnlock } from "react-icons/fa";
import { MdSensorDoor } from "react-icons/md";

const FlorOne = () => {
  const myApartments = [
    "A_1",
    "A_2",
    "A_3",
    "A_4",
    "A_5",
    "A_6",
    "A_7",
    "A_8",
    "A_9",
    "A_10",
    "A_11",
    "A_12",
    "A_13",
    "A_14",
    "A_15",
    "A_16",
    "A_17",
    "A_18",
    "B_18",
    "B_19",
    "B_20",
    "B_21",
    "B_22",
    "B_23",
    "B_24",
    "B_25",
    "B_26",
    "B_27",
    "B_28",
    "B_29",
    "B_30",
    "B_31",
    "B_32",
    "B_33",
    "B_34",
    "B_35",
  ];

  const [lockedState, setLockedState] = useState(
    myApartments.reduce((acc, apartment) => {
      acc[apartment] = true;
      return acc;
    }, {})
  );

  const toggleLock = (apartment) => {
    setLockedState((prevState) => ({
      ...prevState,
      [apartment]: !prevState[apartment],
    }));
  };

  return (
    <div className="container">
      <div className="fira-pic">
        <p className="voono">Vo'ono</p>
        <img className="fira" alt="" src="pictures/fira.jpg"></img>
      </div>

      <div className="apartment-container">
        {myApartments.map((apartment) => (
          <div
            key={apartment}
            className={`apartment ${
              lockedState[apartment] ? "locked" : "unlocked"
            }`}
            onClick={() => toggleLock(apartment)}
          >
            <span className="door">
              <MdSensorDoor />
            </span>
            <span className="apfont">{apartment}</span>
            {lockedState[apartment] ? (
              <span className="falocked">
                <FaLock />
              </span>
            ) : (
              <span className="faunlocked">
                <FaUnlock />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlorOne;

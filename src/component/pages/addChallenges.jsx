import React, { useState } from "react";
import "./addChallengesS.css";
import Photoc from "../photo.png";


export default function AddChallenges() {
  const [daysCount, setDaysCount] = useState(2); // العدد الإفتراضي للأيام هو يومين
  const [daysContent, setDaysContent] = useState(["", ""]); // محتوى كل يوم

  // تعديل محتوى اليوم
  const handleDayChange = (index, value) => {
    const updatedDaysContent = [...daysContent];
    updatedDaysContent[index] = value;
    setDaysContent(updatedDaysContent);
  };

  // إضافة يوم جديد
  const addNewDay = () => {
    setDaysCount(daysCount + 1);
    setDaysContent([...daysContent, ""]);
  };

  return (
    <>
      <div className="bodyc">
        <h1>Add Challenges</h1>
        <div className="conc">
          <br />
          <img src={Photoc} className="photoa" alt="icon" />
          <form className="formc">
            <label>Challenges Name</label>
            <br />
            <input className="in" type="text" />
            <br />
            <label>Brief</label>
            <br/>
            <input className="in" type="text" />
            <br />
            {daysContent.map((day, index) => (
              <React.Fragment key={index}>
                <label>Day {index + 1}</label>
                <br />
                <textarea
                  className="ta"
                  value={day}
                  onChange={(e) => handleDayChange(index, e.target.value)}
                ></textarea>
                <br />
              </React.Fragment>
            ))}
            <button className="buadd" type="button" onClick={addNewDay}>
              Add Day
            </button>
            <button className="busa" type="button">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

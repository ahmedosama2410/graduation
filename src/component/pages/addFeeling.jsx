import React, { useState } from "react";
import "./addFeelingS.css";

export default function AddFeeling() {

  const [advicesCount, setadvicesCount] = useState(2); // العدد الإفتراضي للأيام هو يومين
  const [advicesContent, setadvicesContent] = useState(["", ""]); // محتوى كل يوم

  // تعديل محتوى اليوم
  const handleadviceChange = (index, value) => {
    const updatedadvicesContent = [...advicesContent];
    updatedadvicesContent[index] = value;
    setadvicesContent(updatedadvicesContent);
  };

  // إضافة يوم جديد
  const addNewadvice = () => {
    setadvicesCount(advicesCount + 1);
    setadvicesContent([...advicesContent, ""]);
  };

  return (
    <>
      <div className="bodyc">
        <h1>Add Feeling</h1>
        <div className="conc">
          <br />
          <form className="formc">
            <label>Feeling Name</label>
            <br />
            <input className="in" type="text" />
            <br />
            <label>Brief</label>
            <br/>
            <input className="in" type="text" />
            <br />
            {advicesContent.map((advice, index) => (
              <React.Fragment key={index}>
                <label>Advice {index + 1}</label>
                <br />
                <textarea
                  className="ta"
                  value={advice}
                  onChange={(e) => handleadviceChange(index, e.target.value)}
                ></textarea>
                <br />
              </React.Fragment>
            ))}
            <button className="buadd" type="button" onClick={addNewadvice}>
              Add advice
            </button>
            <button className="busa" type="button" >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

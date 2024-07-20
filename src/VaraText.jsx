import React, { useEffect } from "react";
import Vara from "vara";
function VaraText({ text }) {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 50,
          strokeWidth: 1.3,
          lineHeight: 95,
          color: "#fff",
          textAlign: "center",
        },
      ]
    );
    
  }, []);


  return <div id="vara-container" style={{width: '100%', maxWidth: '1300px', margin: '0px auto'}} className="z-[20]"></div>;
}

export default VaraText;
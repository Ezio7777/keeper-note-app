import React from "react";
import "../components_styles/footer.css";

function footer() {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div className="Footer">
      <p>Copyright©{year}</p>
    </div>
  );
}

export default footer;

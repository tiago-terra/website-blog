import React, { useState } from "react";

function Footer() {
  const [siteName, setName] = useState("Tiago Terra");
  const [socialLinks, setSocial] = useState([
    "github",
    "instagram",
    "linkedin",
  ]);

  return (
      <footer>
        <div className="footer-container">
          <span>{socialLinks.map((i) => {return (<a href={`https://${i}.com/`}><i className={`bx bxl-${i}`}></i></a>);})}</span>
          <p className="font-body font-light text-primary dark:text-white text-center">©2023 {siteName}</p>
        </div>
    </footer>
  );
}

export default Footer;

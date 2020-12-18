import React, { Component } from "react";

export default React.memo(function Header() {
  console.log("Header");
  return (
    <div>
    <a
      href="#"
      className="small brand-logo left"
      onClick={(e) => e.preventDefault()}
    >
      Tournaments
    </a>
    </div>
  );
})

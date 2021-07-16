import React from "react";
import GoogleAuth from "./GoogleAuth";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <h1 className="ui header">TODO List</h1>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const urlPostman =
  "https://bdfb4956-5798-4e93-bed9-6f1e7b0b3d6a.mock.pstmn.io/token";
const urlddd = "http://localhost:8000/api/ddd";

const TestButton = () => {
  return (
    <>
      {" "}
      h
      <button
        onClick={() =>
          window.fetch(urlPostman, {
            method: "GET",
            // credentials: "same-origin",
          })
        }
        style={{
          width: 100,
          height: 50,
          background: "blue",
          color: "white",
          cursor: "pointer",
        }}
      >
        POSTMAN
      </button>
      <button
        onClick={() => {
          fetch(urlddd, {
            method: "GET",
            credentials: "include",
          }).catch((e) => alert("WYJEBALO SIE " + e));
        }}
        style={{
          width: 100,
          height: 50,
          background: "blue",
          color: "white",
          cursor: "pointer",
        }}
      >
        XXX
      </button>
      <button
        onClick={() => {
          console.log(document.cookie);
        }}
        style={{
          width: 100,
          height: 50,
          background: "red",
          color: "white",
          cursor: "pointer",
        }}
      >
        COOKIES
      </button>
    </>
  );
};

export default TestButton;

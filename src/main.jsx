import React from "react";
import ReactDOM from "react-dom/client";
//--
import { MultipleCustomHooks } from "./03-ejemplos/MultipleCustomHooks";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//--
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
);

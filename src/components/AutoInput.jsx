import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);

  const arr = jobs.map((job) => job[name]);

  const filtredSet = new Set(arr);

  const options = Array.from(filtredSet);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={name} required />

      <datalist>
        {options.map((i) => (
          <option key={i} value={i}></option>
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;

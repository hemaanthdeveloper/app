import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "./DATA";

const Auto = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");

  function onChangeSearch(event) {
    //console.log(event.target.value);
    let searchedValue;
    // console.log("event.target.value.length", event.target.value.length);
    event.target.value.length <= 0
      ? (searchedValue = "")
      : (searchedValue = event.target.value.toLowerCase());
    setValue(searchedValue);
    //  console.log("searchedValue", searchedValue);

    let finalvalue = Data.filter((key) =>
      key.name.toLowerCase().includes(searchedValue)
    );

    setOptions(finalvalue);

    console.log("finalvalue", finalvalue);
  }

  return (
    <div className="flex-container flex-column pos-rel">
      <input
        className="form-control"
        onChange={onChangeSearch}
        placeholder="Search Here"
        value={value}
      />
      <div className="autoContainer">
        <table className="table">
          <tbody>
            {options.map((v, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Link
                      to={`/search/${v.id}`}
                      onClick={() => {
                        setOptions([]);
                        setValue("");
                      }}
                    >
                      <img
                        src={`/Assets/${v.img}`}
                        alt={v.name}
                        style={{ width: "5rem", height: "5rem" }}
                      />
                    </Link>
                  </td>
                  <td>{v.name}</td>
                  <td>Price ₹ : {v.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Search() {
  return <Auto />;
}

export default Search;

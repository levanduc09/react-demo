import React, { useState, useContext, useEffect } from "react";
// import AlgoliaApiService from "../../adapters/xhr/AlgoliaApiService";

export const DashboardPage = (props) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const getData = async () => {
    //let result = await AlgoliaApiService.getAll(value);
    //setItems(result.hits);
    fetch("https://hn.algolia.com/api/v1/search?query=" + value)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.hits);
        },
        (error) => {}
      );
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value != "") getData();
  }, [value]);

  const debouncedChangeHandler = debounce(changeHandler, 500);

  return (
    <>
      <input onChange={debouncedChangeHandler} placeholder="Type something" />
      {items.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  );
};
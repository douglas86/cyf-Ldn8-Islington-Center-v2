import React, { useState, useEffect } from "react";
//import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/questions/lessons/${id}`)
      .then((response) => response.json())
      .then((data) => console.log("data", data));
  }, []);
 

  return <div>hello</div>;
};

export default Quiz;

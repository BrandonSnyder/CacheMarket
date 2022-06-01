import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);

  console.log(data);

  const itemList = data?.item || [];
  console.log(itemList);
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
      {itemList.map((item) => {
              return (
                <li >{item.name}
                </li>
              );
            })}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

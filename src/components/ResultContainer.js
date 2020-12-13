import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateChoice } from "../redux/";
import Message from "./Message";

const ResultContainer = ({ houses, selectedHouses, updateChoice }) => {
  const [isStopped, setStop] = useState(false);

  useEffect(() => {
    if (!isStopped) {
      const interval = setInterval(() => {
        updateChoice();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [updateChoice, isStopped]);

  const handleToggle = () => {
    setStop(!isStopped);
  };
  return (
    <div>
      <h2>Choixpeau</h2>
      <ul>
        {houses.map((house) => (
          <li key={house}>{house}</li>
        ))}
      </ul>
      <Message message={selectedHouses} />
      <button onClick={handleToggle}>
        {isStopped ? "Relancer la boucle" : "Stop"}
      </button>
      {isStopped && <button onClick={updateChoice}>Générer un choix</button>}
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    updateChoice: () => dispatch(updateChoice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);

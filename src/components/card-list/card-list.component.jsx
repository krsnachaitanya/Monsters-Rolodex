import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        // key is neeeded for react to target the specific element to update it
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

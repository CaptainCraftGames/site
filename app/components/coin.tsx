import React from "react";
import Classes from "./../styles/coin.module.scss";

export default function Coin() {
  return (
    <div className={Classes.coinContainer}>
      <div className={Classes.coin}>
        <div className={Classes.tails}></div>
        <div className={Classes.heads}></div>
      </div>
    </div>
  );
}

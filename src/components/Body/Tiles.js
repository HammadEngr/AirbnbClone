import React from "react";
import classes from "./Tiles.module.css";
import Tile from "./Tile";
import { ImgSrc, ImgSrc1, ImgSrc2, ImgSrc3 } from "../Data/ImgData";
import { locData } from "../Data/locations";
////////////////////////////////////////
const Tiles = () => {
  return (
    <div className={classes.tiles__container}>
      <Tile imgSrc={ImgSrc} loc={locData[0]} />
      <Tile imgSrc={ImgSrc1} loc={locData[1]} />
      <Tile imgSrc={ImgSrc2} loc={locData[2]} />
      <Tile imgSrc={ImgSrc3} loc={locData[3]} />
      <Tile imgSrc={ImgSrc3} loc={locData[4]} />
      <Tile imgSrc={ImgSrc2} loc={locData[5]} />
      <Tile imgSrc={ImgSrc1} loc={locData[6]} />
      <Tile imgSrc={ImgSrc} loc={locData[7]} />
      <Tile imgSrc={ImgSrc} loc={locData[8]} />
      <Tile imgSrc={ImgSrc1} loc={locData[9]} />
      <Tile imgSrc={ImgSrc2} loc={locData[10]} />
      <Tile imgSrc={ImgSrc3} loc={locData[11]} />
    </div>
  );
};

export default Tiles;

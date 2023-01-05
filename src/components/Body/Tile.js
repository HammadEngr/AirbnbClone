import React from "react";
import { Link } from "react-router-dom";
import classes from "./Tile.module.css";
import TileSlide from "./TileSlide";
import TileDescription from "./TileDescription";
const Tile = (props) => {
  console.log(props.loc);
  return (
    <div className={classes.main}>
      <TileSlide imgSrc={props.imgSrc} />
      <Link to="/location" className={classes.link}>
        <TileDescription loc={props.loc} />
      </Link>
    </div>
  );
};
export default Tile;

import classes from "./CardSmall.module.css";
/////////////////////////////////////////////
const CardSmall = (props) => {
  const customClass = `${props.className} ${classes.card}`;
  return <div className={customClass}>{props.children}</div>;
};
export default CardSmall;

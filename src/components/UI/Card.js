import "./Card.css";

function Card(props) {
  const css = "card " + props.className;
  return <div className={css}>{props.children}</div>;
}

export default Card;

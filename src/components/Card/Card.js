import styles from "./Card.module.scss";

const Card = (props) => {
  return <article className={styles.card}>{props.children}</article>;
};

export default Card;

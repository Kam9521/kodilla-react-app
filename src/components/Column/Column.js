import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";

const Column = (props) => {
  return (
    <article className={styles.column}>
      <h3 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon} />
        {props.title}
      </h3>

      {props.cards.map((card) => (
        <Card key={card.id}>{card.title}</Card>
      ))}

      <CardForm action={props.addCard} columnId={props.id} />
    </article>
  );
};

export default Column;

import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleCardFavorite, removeCard } from "../../redux/store";

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveClick = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      dispatch(removeCard(id));
    }
  };

  return (
    <article className={styles.card}>
      {title}

      <button
        className={clsx(styles.favorite, isFavorite && styles.favoriteActive)}
        onClick={handleFavoriteClick}
        type="button"
      >
        <FontAwesomeIcon icon={faStar} />
      </button>

      <button
        className={styles.remove}
        onClick={handleRemoveClick}
        type="button"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </article>
  );
};

export default Card;

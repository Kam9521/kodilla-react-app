import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/store";

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <article className={styles.card}>
      {title}

      <button
        className={clsx(styles.favorite, isFavorite && styles.favoriteActive)}
        onClick={handleFavoriteClick}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    </article>
  );
};

export default Card;

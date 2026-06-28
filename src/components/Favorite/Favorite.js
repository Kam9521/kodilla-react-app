import { useSelector } from "react-redux";

import { getFavoriteCards } from "../../redux/store";

import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <section>
      <PageTitle>Favorite</PageTitle>

      {favoriteCards.length ? (
        favoriteCards.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <p>No cards...</p>
      )}
    </section>
  );
};

export default Favorite;

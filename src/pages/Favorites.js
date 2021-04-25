import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>No favorites to display.</p>;
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>Favorite Meetups</h1>
            {content}
        </section>
    );
}

export default Favorites;
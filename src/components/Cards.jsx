import { Card } from "./Card";

export function Cards(props) {
    return (
        <div className="movies">
            {props.cards.map(card => 
                <Card key={card.imdbID} {...card} />
            )}
        </div>
    )
}
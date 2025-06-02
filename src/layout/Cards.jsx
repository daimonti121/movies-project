import { Card } from "./card";

export function Cards(props) {
    return (
        <>
            {props.cards.map(card => 
                <Card Title={card.Title} Year={card.Year} Poster={card.Poster} />
            )}
        </>
    )
}
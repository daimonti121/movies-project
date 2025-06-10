import { Card } from "./Card";

export function Cards(props) {
    const {cards = []} = props
    
    return (
        <div className="movies">
            {cards.length ? cards.map(card => 
                <Card key={card.imdbID} {...card} />
            ) : <h4>Nothing found</h4>
        }
        </div>
    )
}
import { Card } from "./styles";

import { CartButton, FavoriteButton } from '../index';

export function PackageCard({ Image, Destination, Details, Price, Quantity }) {
    return (
        <Card>
            <img src={Image} alt={Destination} />
            <article>
                <div className="titleCard">
                    <h2>{Destination}</h2>
                    <FavoriteButton />
                </div>
                <p>{Details}</p>
                <div className="detailsCard">
                    <span>{Price}</span>
                    <p>x {Quantity} pessoas</p>
                </div>
                <CartButton />
            </article>
        </Card>
    )
}
    import React from "react";

const CardInfo = ({ card }) => {
    return (
        <div className="card">
        <div className="card-title">
            <h1>{card.name}</h1>
            <img src={card.card_images[0].image_url} alt={card.name} />
        </div>
        <div className="">
            <div className="">
                <span>Tipo:</span>
                <span className="">{card.type}</span>
            </div>
            <div className="">
                <span>Descripción:</span>
                <span className="">{card.desc}</span>
            </div>
            <div className="">
                <span>Atributo:</span>
                <span className="">{card.attribute}</span>
            </div>
            <div className="">
                <span>Nivel:</span>
                <span className="">{card.level}</span>
            </div>
            <div className="">
                <span>Ataque:</span>
                <span className="">{card.atk}</span>
            </div>
            <div className="">
                <span>Defensa:</span>
                <span className="">{card.def}</span>
            </div>
            <div className="">
                <span>Arquetipo:</span>
                <span className="">{card.archetype}</span>
            </div>
            <div className="">
                <span>Tipo de Cuadro:</span>
                <span className="">{card.race}</span>
            </div>
            <div className="">
                <span>Raza:</span>
                <span className="">{card.race}</span>
            </div>
            <div className="">
                <span>Juego de Cartas:</span>
                <span className="">{card.card_sets[0].set_name}</span>
            </div>
            <div className="">
                <span>Precio:</span>
                <span className="">{card.card_prices[0].tcgplayer_price}</span>
            </div>
        </div>
    </div>
    
    );
};

    export default CardInfo;

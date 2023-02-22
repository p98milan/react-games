import React from 'react';

const Game = ({ id, cheapest, external, thumb }) => {
    return (
        <div className="gameContainer">
            <img src={thumb} alt={thumb} />
            <h4>{external}</h4>
            <p>Azonosító: <strong> {id}</strong>
            </p>
            <p>Legnagyobb ár: <strong>{cheapest}$</strong>
            </p>
            <hr />
        </div>
    )
}

export default Game;
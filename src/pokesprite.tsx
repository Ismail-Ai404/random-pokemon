import random from "./random";
import "./pokesprite.css";

export default function PokeSprite() {
  const id = random(1, 150); // random Pokémon between 1 and 150

  return (
    <div className="container">
      <h2 className="bor">Pokemon no:{id}</h2>
      <img
        className="img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={`Pokemon #${id}`}
      />
    </div>
  );
}

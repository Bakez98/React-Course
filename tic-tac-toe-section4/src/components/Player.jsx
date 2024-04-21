import React, { useState } from "react";

const Player = ({ initalName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initalName);
  const [isEditing, setIsEditing] = useState(false);

  function HandleEditClick() {
    // setIsEditing(!isEditing); <<-- this doesnt happen instantly its is scheduled
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol}</span>
      </span>
      <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;

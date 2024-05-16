import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import PlayerOverView from "./PlayerOverView";
export interface IPlayer {
  "5W": string;
  highestScore: number;
  id: number;
  playerName: string;
  playerRole: string;
  runs: string;
  team: string;
  wickets: string;
}
const initialPlayer: IPlayer = {
  "5W": "",
  highestScore: 0,
  id: 0,
  playerName: "",
  playerRole: "",
  runs: "",
  team: "",
  wickets: "",
};
const PlayerDetails = () => {
  const { playerId } = useParams();
  const { data = initialPlayer, isLoading } = useQuery("playerDetails", () => {
    return fetch(`http://localhost:5000/playerDetails/${playerId}`).then(
      (res) => res.json()
    );
  });
  return (
    <>{isLoading ? <LoadingPage /> : <PlayerOverView playerInfo={data} />}</>
  );
};

export default PlayerDetails;

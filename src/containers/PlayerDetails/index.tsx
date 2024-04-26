import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";

const PlayerDetails = () => {
  const { playerId } = useParams();
  const { data = [], isLoading } = useQuery("playerDetails", () => {
    return fetch(`http://localhost:5000/playerDetails/${playerId}`).then(
      (res) => res.json()
    );
  });
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Stack justifyContent="center" alignItems="center" height="100vh">
          <Typography fontWeight="bold" fontSize="2rem">
            {data && data[0]?.playerName}
          </Typography>
          <Link href="/">Back</Link>
        </Stack>
      )}
    </>
  );
};

export default PlayerDetails;

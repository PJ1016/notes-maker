import React from "react";
import type { IPlayer } from ".";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import HorizantalScroll from "../../components/HorizantalScroll";

interface IPlayerOverView {
  playerInfo: IPlayer;
}

const PlayerOverView = ({ playerInfo }: IPlayerOverView) => {
  return (
    <Box padding={6}>
      <Typography fontWeight="bold" fontSize="1.5rem" gutterBottom>
        Career & Stats
      </Typography>
      <Divider />
      <Box>
        <Typography
          fontWeight="bold"
          fontSize="1rem"
          marginTop={5}
          gutterBottom
        >
          {playerInfo.playerName} Recent Form
        </Typography>
        <Typography fontSize="0.8rem" fontWeight="600" marginY={2} gutterBottom>
          Batting
        </Typography>
        <HorizantalScroll>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>{" "}
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>{" "}
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>{" "}
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>{" "}
          </Card>
        </HorizantalScroll>
      </Box>
    </Box>
  );
};

export default PlayerOverView;

import React from "react";
import { DataGrid, GridColDef, type GridSlots } from "@mui/x-data-grid";
import {
  Box,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import PersonIcon from "@mui/icons-material/Person";
import { useQuery } from "react-query";
const getIplTeamColor: { [key: string]: string } = {
  SRH: "#FF822A",
  RCB: "#EC1C24",
  RR: "#E73895",
  MI: "#004BA0",
  CSK: "#FFFF00",
  LSG: "#0057E2",
  KKR: "#3A225D",
};
const columns: GridColDef[] = [
  {
    field: "playerName",
    headerName: "Player",
    minWidth: 200,
    renderCell: (params) => (
      <Stack
        useFlexGap
        alignItems="center"
        direction="row"
        spacing={1}
        width="100%"
      >
        <PersonIcon htmlColor={getIplTeamColor[params.row.team]} />
        <Typography fontWeight="bold" fontSize="small" lineHeight="inherit">
          {params.value}
        </Typography>
      </Stack>
    ),
    flex: 1,
  },
  {
    field: "team",
    headerName: "Team",
    flex: 1,
    renderCell: (params) => (
      <Stack useFlexGap alignItems="center" direction="row" spacing={1}>
        <FlagIcon htmlColor={getIplTeamColor[params.value]} />
        {params.value}
      </Stack>
    ),
  },
  {
    field: "runs",
    headerName: "Runs",
    type: "number",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "highestScore",
    headerName: "Highest Score",
    type: "number",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
];

interface IDataQuery {
  isLoading: boolean;
  error: any;
  data: any;
}
function PlayerStats() {
  const { isLoading, data = [] }: IDataQuery = useQuery("userData", () => {
    return fetch("http://localhost:5000/playerStats").then((res) => res.json());
  });

  return (
    <>
      <Box
        style={{
          backgroundColor: "black",
          textAlign: "center",
          fontFamily: "monospace",
          padding: "20px",
        }}
      >
        <Typography fontWeight="bold" fontSize="2rem" color="whitesmoke">
          IPL 2024 Orange Cap List
        </Typography>
        <Typography fontWeight="bold" fontSize="1rem" color="#858584">
          Most Runs in IPL 2024
        </Typography>
      </Box>

      <CardContent>
        <Box padding={2}>
          <DataGrid
            rows={data}
            columns={columns}
            slots={{
              loadingOverlay: LinearProgress as GridSlots["loadingOverlay"],
            }}
            loading={isLoading}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
              sorting: {
                sortModel: [{ field: "runs", sort: "desc" }],
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </CardContent>
    </>
  );
}

export default PlayerStats;

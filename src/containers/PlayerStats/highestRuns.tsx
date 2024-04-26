import React from "react";
import { DataGrid, GridColDef, type GridSlots } from "@mui/x-data-grid";
import { Box, CardContent, LinearProgress } from "@mui/material";

import { useQuery } from "react-query";
import Header from "../../components/Header";
import { getPlayerInfo } from "./playerInfoColumns";

interface IDataQuery {
  isLoading: boolean;
  error: any;
  data: any;
}
const columns: GridColDef[] = [
  ...getPlayerInfo(),
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

function HighestRuns() {
  const { isLoading, data = [] }: IDataQuery = useQuery("userData", () => {
    return fetch("http://localhost:5000/battingStats").then((res) =>
      res.json()
    );
  });

  return (
    <>
      <Header
        title="IPL 2024 Orange Cap List"
        subTitle="Most Runs in IPL 2024"
      />

      <CardContent>
        <Box padding={2} sx={{ height: 400, width: "100%" }}>
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

export default HighestRuns;

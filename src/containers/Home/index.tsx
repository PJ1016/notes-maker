import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, type GridSlots } from "@mui/x-data-grid";
import {
  Box,
  Button,
  CardContent,
  LinearProgress,
  Link,
  Stack,
} from "@mui/material";

import Header from "../../components/Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { IPlayer } from "../PlayerDetails";
import PlayerDescription from "./PlayerDescription";

interface IDataQuery {
  isLoading: boolean;
  error: any;
  data: any;
}
const columns: GridColDef[] = [
  {
    field: "playerName",
    headerName: "Player Name",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "gender",
    headerName: "Gender",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "role",
    headerName: "Role",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "battingStyle",
    headerName: "Batting Style",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "bowlingStyle",
    headerName: "Bowling Style",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "nationality",
    headerName: "Nationality",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "dateOfBirth",
    headerName: "Date Of Birth",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "playerDescription",
    headerName: "Player description",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
];

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  useEffect(() => {
    if (currentPage > 0) {
      const nextPage = currentPage + 1;
      if (nextPage < 3)
        queryClient.prefetchQuery({
          queryKey: ["playerDetails", nextPage],
          queryFn: () => {
            return fetch(
              `http://localhost:5000/playerInfo?page=${nextPage}`
            ).then((res) => res.json());
          },
        });
    }
  }, [currentPage]);
  const { data = [], isLoading }: IDataQuery = useQuery({
    queryKey: ["playerDetails", currentPage],
    queryFn: () => {
      return fetch(
        `http://localhost:5000/playerInfo?_page=${currentPage}`
      ).then((res) => res.json());
    },
    staleTime: 2000,
  });
  const [selectedItem, setSelectedItem] = useState<number>(0);
  return (
    <>
      <Header
        title="Players Information"
        subTitle="Explore the Profiles and Statistics of Cricket Players from Around the World"
      />
      {isLoading ? <div>Loading...</div> : null}
      <CardContent>
        <Box sx={{ height: 400, width: "100%" }}>
          {data.map((item: IPlayer) => (
            <React.Fragment key={item.id}>
              <Link component="button" onClick={() => setSelectedItem(item.id)}>
                {item.playerName}
              </Link>
              <br />
            </React.Fragment>
          ))}
        </Box>
        {selectedItem ? (
          <PlayerDescription id={selectedItem} key={selectedItem} />
        ) : null}
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={data.length === 0 || currentPage > 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </CardContent>
    </>
  );
}

export default Home;

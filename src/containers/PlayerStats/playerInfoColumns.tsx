import { Link, Stack, Typography } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import FlagIcon from "@mui/icons-material/Flag";
import PersonIcon from "@mui/icons-material/Person";
import { getIplTeamColor } from "../../utils/getIplTeamColor";
export const getPlayerInfo = () => {
  return [
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
          height="inherit"
        >
          <PersonIcon htmlColor={getIplTeamColor[params.row.team]} />
          <Link
            variant="body2"
            href={`/player/${params.row.id}`}
            color="inherit"
          >
            <Typography fontWeight="bold" fontSize="small" lineHeight="inherit">
              {params.value}
            </Typography>
          </Link>
        </Stack>
      ),
      flex: 1,
      align: "center",
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
  ] as GridColDef[];
};

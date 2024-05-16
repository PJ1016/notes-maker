import { useQuery } from "@tanstack/react-query";
import React from "react";
interface IPlayerDescription {
  id: number;
}
const PlayerDescription = ({ id }: IPlayerDescription) => {
  const { data, isLoading } = useQuery({
    queryKey: [`playerDescription`, id],
    queryFn: () => {
      return fetch(`http://localhost:5000/playerDescription/${id}`).then(
        (res) => res.json()
      );
    },
    staleTime: 2000,
  });
  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>{data[0].playerDescription}</div>;
  return <></>;
};

export default PlayerDescription;

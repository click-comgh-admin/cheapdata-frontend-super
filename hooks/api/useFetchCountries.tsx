import { useQuery } from "@tanstack/react-query";

import axios from "axios";

/* queries */
const getCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};
export function useGetCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
}

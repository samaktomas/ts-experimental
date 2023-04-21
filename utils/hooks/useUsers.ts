import useSWR from "swr";
import { fetcher } from "../fetcher";

const useUsers = () => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users`,
    fetcher
  );

  return {
    users: data,
    isLoading,
    isError: error,
  };
};

export default useUsers;

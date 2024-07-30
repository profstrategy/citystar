import { useQuery } from "@tanstack/react-query";
import { getVipRooms } from "../services/apiRoomVip"

export function useVip() {
  const {
    isLoading,
    data: vipRooms,
    error,
  } = useQuery({
    queryKey: ["viprooms"],
    queryFn: getVipRooms
  });

  return { isLoading, error, vipRooms };
}
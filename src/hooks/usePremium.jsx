import { useQuery } from "@tanstack/react-query";
import { getPremiumRooms } from "../services/apiPremium";

export const usePremium = () => {
  const {
    isLoading,
    data: premiumRooms,
    error,
  } = useQuery({
    queryKey: ["premiumrooms"],
    queryFn: getPremiumRooms,
  });

  return { isLoading, error, premiumRooms };
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletePremiumRoom } from "../services/apiPremium";

const useDeletePremiumRoom = () => {
    const queryClient = useQueryClient()
    const { isLoading: isDeleting, mutate } = useMutation({
        mutationFn: deletePremiumRoom,
        onSuccess: () => {
            toast.success("Room successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["premiumrooms"],
            });
        },

        onError: (err) => toast.error(err.message)
    })

    return { isDeleting, mutate }
}

export { useDeletePremiumRoom }
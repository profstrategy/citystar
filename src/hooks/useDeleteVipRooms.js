import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteVipRoom } from "../services/apiRoomVip";

const useDeleteVipRoom = () => {
    const queryClient = useQueryClient()
    const { isLoading: isDeleting, mutate } = useMutation({
        mutationFn: deleteVipRoom,
        onSuccess: () => {
            toast.success("Room successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["viprooms"],
            });
        },

        onError: (err) => toast.error(err.message)
    })

    return { isDeleting, mutate }
}

export { useDeleteVipRoom }
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'

import { CreateVipRoom } from '../services/apiRoomVip'

export const useCreateRoom = () => {
  const { reset } = useForm()
  const queryClient = useQueryClient();
  const { mutate: CreateRoom, isLoading: isCreating } = useMutation({
    mutationFn: CreateVipRoom,
    onSuccess: () => {
      toast.success("New room successfully created");
      queryClient.invalidateQueries({ queryKey: ["viprooms"] });
      reset(); 
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    },
  });

  return { isCreating, CreateRoom }
}

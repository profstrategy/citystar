import { supabase } from './supabase'

export const getPremiumRooms = async () => {

    let { data, error } = await supabase
        .from('RoomsPremium')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error('Room do not exist')
    }

    return data
}


export const deletePremiumRoom = async (id) => {

    const {data,  error } = await supabase
        .from('RoomsPremium')
        .delete()
        .eq('id', id)


    if (error) {
        console.log(error)
        throw new Error('Room could not be deleted')
    }

    return data
}

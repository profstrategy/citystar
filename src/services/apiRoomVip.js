import { supabase, supabaseUrl } from './supabase'


export const getVipRooms = async () => {
    let { data, error } = await supabase
        .from('RoomsVip')
        .select('*')

    if (error) {
        console.log(error)
        throw new Error('Vip rooms do not exist')
    }

    return data
}

export const deleteVipRoom = async (id) => {
    const { data, error } = await supabase
        .from('RoomsVip')
        .delete()
        .eq("id", id)

    if (error) {
        console.log(error)
        throw new Error('Vip rooms could not be deleted')
    }

    return data
}


export const CreateVipRoom = async (newRoom) => {

    const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll('/', '');
    const imagePath = `${supabaseUrl}/storage/v1/object/public/vip_rooms_images/${imageName}`

    //create vipRoom
    const { data, error } = await supabase
        .from('RoomsVip')
        .insert([{ ...newRoom, image: imagePath }])
        .select()


    if (error) {
        console.log(error)
        throw new Error('Vip room could not be created')
    }

    //upload images
    const { error: storageError } = await supabase
        .storage
        .from('vip_rooms_images')
        .upload(imageName, newRoom.image)

        if(storageError){
            await supabase
        .from('RoomsVip')
        .delete()
        .eq("id", data.id)

        //delete vip room if there is an error uploading image
        console.log(storageError)
        throw new Error('Vip room image could not be created therefore other details were deleted')
        }

    return data
}






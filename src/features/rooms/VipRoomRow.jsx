// import { HiTrash } from "react-icons/hi2";
import { useState } from "react";

import { formatCurrency } from "../../utilis/helper";
import { useDeleteVipRoom } from "../../hooks/useDeleteVipRooms";
import { Cabin, Discount, Img, Price, TableRow } from "../../ui/RoomRow";
import PropTypes from 'prop-types';
import CreateRoomForm from "./CreateRoomForm";




const VipRoomRow = ({ room = {} }) => {
const [showForm, setShowForm] = useState(false)

    const {
        id: roomId,
        name,
        maxCapacity,
        regularPrice,
        discount,
        image,
    } = room;

    const { isDeleting, mutate } = useDeleteVipRoom()

    return (
        <>
            <TableRow role="row">
                <Img src={image} />
                <Cabin>{name}</Cabin>
                <div>Fits up to {maxCapacity} guests</div>
                <Price>{formatCurrency(regularPrice)}</Price>
                {discount ? (
                    <Discount>{formatCurrency(discount)}</Discount>
                ) : (
                    <span>&mdash;</span>
                )}

                <div>
                    <button onClick={() => setShowForm((show) => !show)}>Edit</button>

                    <button onClick={() => mutate(roomId)} disabled={isDeleting}>
                        Delete
                    </button>
                </div>
            </TableRow>

            {showForm && <CreateRoomForm roomToEdit={room} />}
        </>
    );
};

VipRoomRow.propTypes = {
    room: PropTypes.shape({
        image: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        maxCapacity: PropTypes.string,
        regularPrice: PropTypes.string,
        discount: PropTypes.string,
    }),
};

export default VipRoomRow;

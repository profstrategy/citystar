import PropTypes from 'prop-types';
import { HiTrash } from "react-icons/hi2";
import { useDeletePremiumRoom } from '../../hooks/useDeletePremiumRoom';



import { Cabin, Discount, Img, Price, TableRow } from '../../ui/RoomRow';
import { formatCurrency } from '../../utilis/helper';

const PremiumRoomRow = ({ room }) => {
    const {
        id: roomId,
        name,
        maxCapacity,
        regularPrice,
        discount,
        image,
    } = room;

    const { isDeleting, mutate } = useDeletePremiumRoom()


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

                    <button onClick={() => mutate(roomId)} disabled={isDeleting}>
                        <HiTrash />
                    </button>
                </div>
            </TableRow>
        </>
    )
}

PremiumRoomRow.propTypes = {
    room: PropTypes.shape({
        image: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        maxCapacity: PropTypes.string.isRequired,
        regularPrice: PropTypes.string.isRequired,
        discount: PropTypes.string.isRequired,
    }).isRequired,
};


export default PremiumRoomRow

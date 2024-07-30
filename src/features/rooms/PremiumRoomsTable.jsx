import { Table, TableHeader } from "../../ui/RoomsTable"
import Spinner from "../../ui/Spinner"
import PremiumRoomRow from "./PremiumRoomRow"
import { usePremium } from "../../hooks/usePremium"


const PremiumRooms = () => {

  const { premiumRooms, isLoading } = usePremium()

  if(isLoading) return <Spinner />
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Rooms</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {premiumRooms.map((room) => (
        <PremiumRoomRow room={room} key={room.id} />
      ))}
    </Table>
  )
}

export default PremiumRooms

import { Table, TableHeader } from "../../ui/RoomsTable";
import Spinner from "../../ui/Spinner";
import { useVip } from "../../hooks/useVip"
import VipRoomRow from "./VipRoomRow";

import { useState } from "react";
import CreateRoomForm from "./CreateRoomForm";
import Button from "../../ui/Button";

function VipRoomTable() {
  const { isLoading, vipRooms } = useVip();
  const [ showForm, setShowForm ] = useState(false)

  if (isLoading) return <Spinner />;

  return (
    <>
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Rooms</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {vipRooms.map((room) => (
        <VipRoomRow room={room} key={room.id} />
      ))}
    </Table>
<Button onClick={() => setShowForm((show) => !show)}>Add new room</Button>

{showForm && <CreateRoomForm />}
    </>
  );
}

export default VipRoomTable;

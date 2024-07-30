// import PropTypes from 'prop-types';

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useCreateRoom } from '../../hooks/useCreateRoom';
import { useCreateRoomForm } from '../../hooks/useCreateRoomForm';
import FormRow from "../../ui/FormRow";


function CreateRoomForm() {
  const { isCreating, CreateRoom } = useCreateRoom()
  const { handleSubmit, register, getValues, getError } = useCreateRoomForm()

  const { errors } = getError
  // console.log(errors)

  const handleOnSubmit = (data) => {
    CreateRoom({...data, image: data.image[0]})
  }

  const onError = (error) => {
    console.log(error)
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit, onError)}>
      <FormRow label={'Room name'} error={errors?.name?.message}>
        <Input type="text" id="name" {...register('name', { required: "This field is required" })} disabled={isCreating} />
      </FormRow>

      <FormRow label={'Maximum Capacity'} error={errors?.maxCapacity?.message} >
        <Input type="number" id="maxCapacity" {...register('maxCapacity', { required: "This field is required", min: { value: 1, message: "Capacity should be atleast 1" } })} disabled={isCreating}/>
      </FormRow>

      <FormRow label={'Regular Price'} error={errors?.regularPrice?.message} >
        <Input type="number" id="regularPrice" {...register('regularPrice', { required: "This field is required", min: { value: 10, message: "Regular price should be atleast $10" } })} disabled={isCreating} />
      </FormRow>

      <FormRow label={'Discount'} error={errors?.discount?.message} >
        <Input
          type="number"
          id="discount"
          {...register('discount', {
            required: "Can't be empty, make it at least 0",
            validate: (value) => getValues().regularPrice >= value || "Discount should be less than regularPrice"
            // validate: (value) => (getValues().regularPrice * 0.1) = value || "Discount should be 10% of regularPrice."
          })}
          defaultValue={0}
          disabled={isCreating}
        />

      </FormRow>

      <FormRow label={'Description for website'} error={errors?.description?.message} >
        <Textarea type="number" id="description" {...register('description', { required: "This field is required" })} defaultValue="" disabled={isCreating}/>
      </FormRow>

      <FormRow label={'Image'} error={errors?.image?.message} >
        <FileInput id="image" accept="image/*" {...register('image')} disabled={isCreating} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add Room</Button>
      </FormRow>
    </Form>
  );
}

// CreateRoomForm.propTypes = {
//   image: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   maxCapacity: PropTypes.string.isRequired,
//   regularPrice: PropTypes.string.isRequired,
//   discount: PropTypes.string.isRequired,
// };

export default CreateRoomForm;
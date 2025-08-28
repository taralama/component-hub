import React from 'react';
import Input from '../../components/Input';

import { useForm } from 'react-hook-form';

const InputTypes = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
    },
  });

  const { control, handleSubmit } = methods;

  function sendData(payload : unknown) {
    console.log(payload)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(sendData)}>
        <h2>Basic input InputTypes</h2>

        <Input className='border rounded shadow-lg' control={control} name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputTypes;

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import postServices, { postData } from '../../services/post.services';
import Input from '../Input';

const SendData = () => {
  const { mutate } = useMutation<unknown, Error, postData>({
    mutationFn: (data: postData) => postServices.postData(data),
    // onSuccess: (res) => {
    //   console.log(res);
    // },
  });

  const { handleSubmit, register, control } = useForm<
    postData & { isChecked: boolean }
  >({
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      password: '',
      isChecked: false,
    },
  });

  const handlePost = (data: postData & { isChecked: boolean }) => {
    // console.log(data);
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(handlePost)}
        className="border w-100 py-10 px-5 shadow-2xl border-none"
      >
        <label htmlFor="firstName" className="block">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          {...register('firstName')}
          className="border shadow-2xl h-8 rounded"
        />

        <label htmlFor="lastName" className="block">
          Last Name
        </label>
        <input
          type="text"
          {...register('lastName')}
          className="border shadow-2xl h-8 rounded"
        />
        <label htmlFor="dateOfBirth" className="block">
          DOB
        </label>
        <Input
          control={control}
          type="date"
          {...register('dob')}
          className="border shadow-2xl h-8 rounded"
        />
        <label htmlFor="password" className="block">
          Password
        </label>
        <Input
          control={control}
          type="password"
          {...register('password')}
          className="border shadow-2xl h-8 rounded"
          name="password"
          rules={{
            minLength: 8,
          }}
        />

        {/* Checkbox */}
        <label className="block mt-2">
          <input type="checkbox" {...register('isChecked')} />
          Check me
        </label>

        <button
          type="submit"
          className="border w-full border-none mt-4 duration-150  p-2 bg-amber-500 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendData;

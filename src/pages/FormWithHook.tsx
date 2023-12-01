import { useForm } from 'react-hook-form';

interface FormInputData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  conditionsAccepted: string;
  file: string;
  country: string;
}

export const FormWithHook = () => {
  const { register, handleSubmit } = useForm<FormInputData>();

  const onSubmit = (data: FormInputData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name')} />

      <label>Age</label>
      <input {...register('age')} />

      <label>Email</label>
      <input {...register('email')} />

      <label>Password</label>
      <input {...register('password')} />

      <label>Confirm password</label>
      <input {...register('confirmPassword')} />

      <label>Gender</label>
      <input {...register('gender')} />

      <label>I agree to the terms and conditions</label>
      <input type="checkbox" {...register('conditionsAccepted')} />

      <input type="file" {...register('file')} />

      <label>Country</label>
      <input {...register('country')} />

      <button type="submit">Submit</button>
    </form>
  );
};

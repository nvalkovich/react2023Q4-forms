import { useForm } from 'react-hook-form';
import { setFormData } from '../store/formSlice';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../types/interfaces';

export const FormWithHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(setFormData({ ...data, file: data.file[0].name }));

    setTimeout(() => {
      navigate('/');
    }, 100);
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

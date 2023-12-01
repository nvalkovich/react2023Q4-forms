import { FormEvent, useRef } from 'react';

export const Uncontrolled = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const conditionsAcceptedRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      conditionsAccepted: conditionsAcceptedRef.current?.checked,
      file: fileRef.current?.value,
      country: countryRef.current?.value,
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input ref={nameRef} name="name" />

      <label>Age</label>
      <input ref={ageRef} name="age" />

      <label>Email</label>
      <input ref={emailRef} name="email" />

      <label>Password</label>
      <input ref={passwordRef} name="password" />

      <label>Confirm password</label>
      <input ref={confirmPasswordRef} name="confirmPassword" />

      <label>Gender</label>
      <input ref={genderRef} name="gender" />

      <label>I agree to the terms and conditions</label>
      <input
        ref={conditionsAcceptedRef}
        type="checkbox"
        name="conditionsAccepted"
      />

      <input
        ref={fileRef}
        type="file"
        name="file"
        onChange={(e) => console.log(e.target.files)}
      />

      <label>Country</label>
      <input ref={countryRef} name="country" />

      <button type="submit">Submit</button>
    </form>
  );
};

import { Link, Outlet } from 'react-router-dom';

export const MainPage: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/uncontrolled-form">Link to uncontrolled form</Link>
        </li>
        <li>
          <Link to="/with-hook-form">Link to form with React Hook Form</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

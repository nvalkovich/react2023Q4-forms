import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { DataTiles } from '../components/DataTiles';

export const MainPage: React.FC = () => {
  const dataList = useAppSelector((state) => state.form.dataList);

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
      {dataList && <DataTiles data={dataList} />}
    </>
  );
};

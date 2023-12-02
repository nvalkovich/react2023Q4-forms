import { FormData } from '../types/interfaces';

type DataTilesProps = {
  data: FormData[];
};

export const DataTiles = ({ data }: DataTilesProps) => {
  return (
    <div>
      {data.map((dataItem) => {
        return (
          <div key={data.indexOf(dataItem)} className="card">
            <p>{dataItem.name}</p>
            <p>{dataItem.age}</p>
            <p>{dataItem.email}</p>
            <p>{dataItem.password}</p>
            <p>{dataItem.confirmPassword}</p>
            <p>{dataItem.gender}</p>
            <p>{dataItem.conditionsAccepted}</p>
            <p>{dataItem.file[0].name}</p>
            <p>{dataItem.country}</p>
          </div>
        );
      })}
    </div>
  );
};

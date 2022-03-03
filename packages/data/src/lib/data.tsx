/* eslint-disable-next-line */
export interface DataProps {
  value: string;
}

export function Data({ value }: DataProps) {
  return (
    <div>
      <h1 style={{ padding: 4 }}>{value}</h1>
    </div>
  );
}

export default Data;

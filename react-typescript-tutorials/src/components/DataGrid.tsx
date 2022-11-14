import React from "react";

interface ItemI {
  id: number;
  name: string;
  age: number;
}

type Props = {
  items: ItemI[];
};

const DataGrid = ({ items }: Props) => {
  return (
    <div style={{ backgroundColor: "ThreeDShadow" }}>
      <ul>
        {items.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataGrid;

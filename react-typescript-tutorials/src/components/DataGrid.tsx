import React from "react";

interface ItemI {
  id: number;
  name: string;
  age: number;
}

type DataGridProps<T> = {
  items: T[];
};

function DataGrid<T>({ items }: DataGridProps<T>) {
  return (
    <div style={{ backgroundColor: "ThreeDShadow" }}>
      <ul>
        {items.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataGrid;

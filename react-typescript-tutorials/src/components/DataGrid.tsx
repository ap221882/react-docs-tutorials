import React from "react";

interface Item {
  id: number;
}

type DataGridProps<T> = {
  items: T[];
};

function DataGrid<T extends Item>({ items }: DataGridProps<T>) {
  return (
    <div style={{ backgroundColor: "ThreeDShadow" }}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataGrid;

// src/components/Table/index.tsx
import React from 'react';

interface TableProps {
  data: Array<Record<string, string | number>>; // Array of data rows, each row is an object with column values
  columns: string[]; // Array of column names to display as headers
}

export const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border-b">
                  {row[column] ?? 'N/A'} {/* Show 'N/A' if value is undefined */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// GenericTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface GenericTableProps<T> {
  data: T[];
  columns: string[];
  renderCell: (item: T, column: string) => React.ReactNode;
  // Add any other props you need here
}

function GenericTable<T>({
  data,
  columns,
  renderCell,
}: // Add other props here
GenericTableProps<T>) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column}>{renderCell(item, column)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default GenericTable;

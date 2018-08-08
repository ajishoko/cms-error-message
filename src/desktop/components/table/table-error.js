import React from 'react';

const TableError = props => (
  <tr>
    {props.status ? (
      <td colSpan={props.data.headers.length}>data not available</td>
    ) : (
      <td colSpan={props.data.headers.length}>
        {props.data.body.dataError.errorMessage
          ? props.data.body.dataError.errorMessage
          : "Ups! There's Something Error!"}
      </td>
    )}
  </tr>
);

export default TableError;

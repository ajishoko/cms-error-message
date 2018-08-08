import React from "react";

const TableLoading = props => (
  <tr>
    <td colSpan={props.headers.length}>Loading</td>
  </tr>
);

export default TableLoading;

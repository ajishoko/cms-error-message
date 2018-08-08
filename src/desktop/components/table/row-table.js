import React from 'react';
import {convertToRupiah} from '../../../Helpers/Format';

const RowTable = props =>
  props.value.body.loading === false &&
  props.value.body.dataResponse.data.items.map((data, i) => {
    const dynamicRowTable = [];
    props.value.headers.map((dataTable, j) => {
      if (j !== 0) {
        if (dataTable.keyAPI === 'status') {
          return dynamicRowTable.push(
            <td key={dataTable.id}>
              <small
                className={`
                    tag tag-${
                        data[dataTable.keyAPI] === 'pending' ||
                        data[dataTable.keyAPI] === 'queue'
                        ? 'warning'
                        : data[dataTable.keyAPI] === 'processing'
                            ? 'secondary'
                            : data[dataTable.keyAPI] === 'failed'
                            ? 'negative'
                            : 'positive'
                    }
                `}
              >
                {data[dataTable.keyAPI]}
              </small>
            </td>,
          );
        } else if (dataTable.keyAPI === 'is_published') {
          return dynamicRowTable.push(
            <td key={dataTable.id}>
              <small
                className={`
                    tag tag-${
                    data[dataTable.keyAPI] === 1
                        ? 'positive'
                        : 'negative'
                    }
                `}
              >
                {data[dataTable.keyAPI] === 1 ? 'active' : 'inactive'}
              </small>
            </td>,
          );
        } else {
          return dynamicRowTable.push(
            <td key={dataTable.id}>
              {dataTable.keyAPI === 'price'
                ? convertToRupiah(data[dataTable.keyAPI])
                : dataTable.keyAPI === 'created_at'
                  ? data[dataTable.keyAPI].replace(/t|z/gi, ' ')
                  : data[dataTable.keyAPI]}
            </td>,
          );
        }
      } else {
        return false;
      }
    });

    const page = props.value.body.dataResponse.data.current_page
      ? props.value.body.dataResponse.data.current_page
      : props.value.body.dataResponse.data.page;

    const limit = props.value.body.dataResponse.data.limit
      ? props.value.body.dataResponse.data.limit
      : props.value.body.dataResponse.data.items.length === Number(props.value.selectedLimit)
        ? props.value.body.dataResponse.data.items.length
        : Number(props.value.selectedLimit);

    return (
      <tr key={i}>
        <td>{page * limit - limit + i + 1}</td>
        {dynamicRowTable}
      </tr>
    );
  });

export default RowTable;

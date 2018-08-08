/**
 * Table component
 * 
 * props:
 *  - headers: array of string. Will be looped as table header cell.
 *  - body: array or array. An array for table row, and array within it for the table cell content.
 *  - loading: define table loading (true of false)
 *  - loadingMessage: Loading message.
 *  - error: define table error (true or false)
 *  - errorMessage: what to display on table error.
 */

import React, {Component} from 'react';

export default class Table extends Component {

  renderTableHead = (headers) => {
    return (
      <tr>
        {headers.map((header, index) => <th key={index}>{header.name}</th>)}
      </tr>
    )
  }

  renderTableLoading = (loadingMessage = 'loading') => {
    if(this.props.loading){
      return (
        <tr>
          <td colSpan={this.props.headers.length}>{loadingMessage}</td>
        </tr>
      )
    }
  }
  
  renderTableError = (errorMessage = 'Error') => {
    if(this.props.error){
      return (
        <tr>
          <td colSpan={this.props.headers.length}>{errorMessage}</td>
        </tr>
      )
    }
  }
  
  renderTableBody = (tableContent) => {
    if(!this.props.loading && !this.props.error){

      if(tableContent.length === 1){
        return (
          <tr>
            <td colSpan={this.props.headers.length}>{tableContent[0][0]}</td>
          </tr>
        )
      }
      
      let table = [];

      tableContent.forEach((tableRow, i) => {
        let row = [];
        
        tableRow.forEach((col, j) => {
          row.push(<td key={j}>{col}</td>)
        })
        
        table.push(<tr key={i}>{row}</tr>);
      })
      
      return table
    }
  }
  
  render() {
    return (
      <section className="mb-2">
        <table className={this.props.loading ? 'table-loading': null}>
          <thead>
            {this.renderTableHead(this.props.headers)}
          </thead>
          <tbody>
            {this.renderTableError(this.props.errorMessage)}
            {this.renderTableLoading(this.props.loadingMessage)}
            {this.renderTableBody(this.props.body)}
          </tbody>
        </table>
      </section>
    )
  }
  
}

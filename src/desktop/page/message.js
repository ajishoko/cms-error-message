import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from '../components/drawer';
import Logout from '../components/logout';
import Button from '../components/button';
import AddSection from '../components/addSection';
import ReactTable from 'react-table';

import 'react-table/react-table.css';


class Message extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          drawer: true,
            data: this.props.messages,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.renderEditable = this.renderEditable.bind(this);
    }

    handleChange = event => {
        if (event.target.name === "no")
          this.setState({ no: event.target.value });
        if (event.target.name === "createdAt")
          this.setState({ createdAt: event.target.value });
          if (event.target.name === "key")
          this.setState({ key: event.target.value });
          if (event.target.name === "message")
          this.setState({ message: event.target.value });
      };

      handleSubmitForm = event => {
        this.state.data.push({
            no: this.state.no, 
            createdAt: this.state.createdAt,
            key: this.state.key,
            message: this.state.message
        }); 
        this.setState({ no: this.state.no + 1, createdAt: "02-08-2018 10:15:00", key: "", message: "" });
        event.preventDefault();
      };

      renderEditable(cell) {
        return (
          <div
            style={{ 
                backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
                const data = [...this.state.data];
                data[cell.index][cell.column.id] = e.target.innerHTML;
                this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cell.index][cell.column.id]
            }}
          />
        );
      }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    handlingState(attribute, value) {
        this.setState((state, props) => {
          return {[attribute]: value};
        });
      }

    handleDataForm(dataForm) {

    }

    render() {
        const { data } = this.state;
        // const classes = 'text-center table-header';

        return (
            <div className="page-wrapper page-message">
                <aside className={`page-aside ${this.state.drawer ? 'active' : ''}`}>
                    <Drawer select={1} />
                </aside>
                <section className="page-main">
                    <section className="page-header">
                        <h3>
                        <i
                            className="material-icons active"
                            onClick={e => this.handlingState('drawer', this.state.drawer ? false : true)}
                        >
                            menu
                        </i>
                        <img src={'./images/kudo-logo.png'} alt="Kudo" height="20px" className="mr-2" />
                        <b>Error Config</b>
                        <Logout {...this.props} />
                        </h3>
                    </section>

                    <section className="page-title">
                        <h1>Message List</h1>
                        <small className="breadcrumb">
                        Home /
                        <b> Message List </b>
                        </small>
                    </section>

                <section>
                    <section className="page-body">
                        <section className="mb-2">
                            <div className="list-detail">
                                <div className="row">
                                    <div className="col">
                                        <AddSection />
                                        <div>
                                            <ReactTable
                                                data={data}
                                                columns={ [
                                                {
                                                    Header: "No",
                                                    accessor: "no",
                                                    className: 'text-center'
                                                },
                                                {
                                                    Header: "Date",
                                                    accessor: "createdAt",
                                                    className: 'text-center'
                                                },
                                                {
                                                    Header: "Key",
                                                    accessor: "key",
                                                    className: 'text-center',
                                                    Cell: this.renderEditable
                                                },
                                                {
                                                    Header: "Message",
                                                    accessor: "message",
                                                    className: 'text-center',
                                                    Cell: this.renderEditable
                                                },
                                                {
                                                    Header: "Delete",
                                                    className: 'text-center',
                                                    Cell: <Button label="DELETE" buttonType="borderless" theme="negative" />
                                                }

                                                ]}
                                                defaultPageSize={10}
                                                className="-striped -highlight"
                                            />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                         </section>
                </section>

                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
    // whatever is returned from here 
    // will show up as props inside of Message

    return{
        messages: state.messages
    };
}

export default connect(mapStateToProps)(Message);
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      queryStringLimit: '',
      data: {
        dataResponse: {
          data: {},
        },
      },
    };
  }

  componentDidMount() {
    const {currentPage} = this.props;
    if (currentPage !== this.state.currentPage) {
      this.setState({currentPage: currentPage});
    }
  }

  componentWillReceiveProps(nextProps) {
    const {queryStringURL} = this.props;

    if (this.state.currentPage !== nextProps.currentPage) {
      this.setState({currentPage: nextProps.currentPage});
    }

    if (Object.keys(queryStringURL).length > 0 && queryStringURL.limit) {
      this.setState({
        queryStringLimit: `limit=${queryStringURL.limit}`,
      });
    }

    if (Object.keys(nextProps.data).length > 0 && nextProps.data.loading === false) {
      this.setState({
        data: {
          ...nextProps.data,
          dataResponse: {
            data: {
              ...nextProps.data.dataResponse.data,
              total_page: nextProps.data.dataResponse.data.total_page
                ? nextProps.data.dataResponse.data.total_page
                : nextProps.data.dataResponse.data.last_page,
              current_page: nextProps.data.dataResponse.data.current_page
                ? nextProps.data.dataResponse.data.current_page
                : nextProps.data.dataResponse.data.page,
            },
          },
        },
      });
    }
  }

  wrapPrevPage = () => {
    const currentData = this.state.data.dataResponse.data;
    if (currentData.current_page > 5 + 1) {
      return (
        <li>
          <span style={{padding: '8px', display: 'block'}}>...</span>
        </li>
      );
    } else {
      return false;
    }
  };

  wrapNextPage = () => {
    const currentData = this.state.data.dataResponse.data;
    if (currentData.current_page < currentData.total_page - 5) {
      return (
        <li>
          <span style={{padding: '8px', display: 'block'}}>...</span>
        </li>
      );
    } else {
      return false;
    }
  };

  renderFirstNav = () => {
    const {pathname} = this.props;
    const currentData = this.state.data.dataResponse.data;
    if (currentData.current_page === 1 || this.state.loading) {
      return false;
    } else {
      return (
        <li>
          <Link to={`${pathname}?page=1`}>First</Link>
        </li>
      );
    }
  };

  renderLastNav = () => {
    const {pathname} = this.props;
    const currentData = this.state.data.dataResponse.data;
    if (currentData.current_page === currentData.total_page || this.state.loading) {
      return false;
    } else {
      return (
        <li>
          <Link to={`${pathname}?page=${currentData.total_page}`}>Last</Link>
        </li>
      );
    }
  };

  render() {
    const {data} = this.state;
    const {pathname} = this.props;
    let listPagination = [];

    if (data.loading === false) {
      for (var i = 1; i <= data.dataResponse.data.total_page; i++) {
        if (
          i >= data.dataResponse.data.current_page - 5 &&
          i <= data.dataResponse.data.current_page + 5
        ) {
          if (i === data.dataResponse.data.current_page) {
            listPagination.push(
              <li key={i}>
                <span
                  style={{display: 'block', padding: '8px'}}
                  className={i === data.dataResponse.data.current_page ? 'disabled' : ''}
                >
                  {i}
                </span>
              </li>,
            );
          } else {
            listPagination.push(
              <li key={i}>
                <Link
                  className={i === data.dataResponse.data.current_page ? 'disabled' : ''}
                  to={`${pathname}?${
                    this.state.queryStringLimit ? this.state.queryStringLimit + '&' : ''
                  }page=${i}`}
                >
                  {i}
                </Link>
              </li>,
            );
          }
        }
      }
    }

    return (
      <section>
        <nav className="pagination text-right">
          <ul>
            {this.renderFirstNav()}
            {/* <li>
              <Link
                className={
                  data.loading === false &&
                  data.dataResponse.data.current_page === 1
                    ? "disabled"
                    : ""
                }
                to={
                  data.loading === false &&
                  data.dataResponse.data.current_page !== 1
                    ? `${pathname}?page=${data.dataResponse.data.current_page -
                        1}`
                    : `${pathname}`
                }
              >
                Previous
              </Link>
            </li> */}
            {this.wrapPrevPage()}
            {listPagination}
            {this.wrapNextPage()}
            {this.renderLastNav()}
          </ul>
        </nav>
      </section>
    );
  }
}

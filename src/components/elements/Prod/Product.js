import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="card">
          <div className="card-header border-1">
            <h3 className="card-title">
              <i className="fas fa-chart-pie mr-1" />
              Permintaan Penukaran Sampah
            </h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-striped table-valign-middle">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sales</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                    Some Product
                  </td>
                  <td>$13 USD</td>
                  <td>
                    <small className="text-success mr-1">
                      <i className="fas fa-arrow-up" />
                      12%
                    </small>
                    12,000 Sold
                  </td>
                  <td>
                    <a href="#" className="text-muted">
                      <i className="fas fa-search" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                    Another Product
                  </td>
                  <td>$29 USD</td>
                  <td>
                    <small className="text-warning mr-1">
                      <i className="fas fa-arrow-down" />
                      0.5%
                    </small>
                    123,234 Sold
                  </td>
                  <td>
                    <a href="#" className="text-muted">
                      <i className="fas fa-search" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                    Amazing Product
                  </td>
                  <td>$1,230 USD</td>
                  <td>
                    <small className="text-danger mr-1">
                      <i className="fas fa-arrow-down" />
                      3%
                    </small>
                    198 Sold
                  </td>
                  <td>
                    <a href="#" className="text-muted">
                      <i className="fas fa-search" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                    Perfect Item
                    <span className="badge bg-danger">NEW</span>
                  </td>
                  <td>$199 USD</td>
                  <td>
                    <small className="text-success mr-1">
                      <i className="fas fa-arrow-up" />
                      63%
                    </small>
                    87 Sold
                  </td>
                  <td>
                    <a href="#" className="text-muted">
                      <i className="fas fa-search" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* /.card */}
      </div>
    );
  }
}

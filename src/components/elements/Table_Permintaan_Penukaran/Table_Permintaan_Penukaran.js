import React, { Component } from "react";

export default class Table_Permintaan_Penukaran extends Component {
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
                  <th>ID Order</th>
                  <th>Nama</th>
                  <th>Waktu</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>121405</td>
                  <td>Andi Budionno</td>
                  <td>10-01-2021 08:14</td>
                  <td className="d-flex justify-content-center">
                    {/* <a href="#" className="text-muted">
                      <i className="fas fa-search" />
                    </a> */}
                    <button className="btn-primary border-0 mr-2">Proses</button>
                    <button className="btn-danger border-0">Tolak</button>
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

import React from "react";
// inisiasi component
import Layout from "../../components/Layout";
import Table from "../../components/elements/Table";
import Grafik_Area from "../../components/elements/Grafik_Area/Grafik_Area";
import Product from "../../components/elements/Prod/Product";
import Box from "../../components/elements/Box/Box";

export default function Home() {
  return (
    <div>
      <Layout>
        {/* <h1>Welcome to HOME</h1> */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  {/* <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol> */}
                  <span className="float-sm-right">
                    <p>Buka • Akan tutup pada 16.00</p>
                    <button className="btn-secondary">edit</button>
                  </span>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <Box />
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  {/* <Table /> */}
                  <Product />
                  <Grafik_Area />
                </section>

                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-5 connectedSortable">
                  <Product />
                  <Grafik_Area />
                </section>
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </Layout>
    </div>
  );
}

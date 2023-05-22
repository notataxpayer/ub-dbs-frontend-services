// import React, { Component } from "react";

// export default class Modal_Proses extends Component {
//   render() {
//     return (
//       <div>
//         {" "}
//         <div className="card">
//           <div className="card-header border-1">
//             <h3 className="card-title">
//               <i className="fas fa-chart-pie mr-1" />
//               Modal_Proses
//             </h3>
//             <div className="card-tools">
//               <button type="button" className="btn btn-tool" data-card-widget="collapse">
//                 <i className="fas fa-minus" />
//               </button>
//               <button type="button" className="btn btn-tool" data-card-widget="remove">
//                 <i className="fas fa-times" />
//               </button>
//             </div>
//           </div>
//           <div className="card-body table-responsive p-0">
//             <table className="table table-striped table-valign-middle">
//               <thead>
//                 <tr>
//                   <th>ID Order</th>
//                   <th>Nama</th>
//                   <th>Waktu</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>121405</td>
//                   <td>Andi Budionno</td>
//                   <td>10-01-2021 08:14</td>
//                   <td className="d-flex justify-content-center">
//                     {/* <a href="#" className="text-muted">
//                       <i className="fas fa-search" />
//                     </a> */}
//                     <button className="btn-primary border-0 mr-2">Proses</button>
//                     <button className="btn-danger border-0">Tolak</button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         {/* /.card */}
//         {/* modal product  */}
//         <div className="modal fade" id="modal_product">
//           <div className="modal-dialog">
//             <div className="modal-content mt-4">
//               <div className="modal-header bg-info text-white">
//                 <h4 className="text-center mx-auto">
//                   <strong>Form Product</strong>
//                 </h4>
//               </div>
//               <div className="modal-body ">
//                 <form onSubmit={(ev) => this.saveProduct(ev)}>
//                   <div className="row">
//                     <div className="col-4">
//                       <img src={product_image_url + "/" + this.state.image} className="modal-image img-thumbnail mx-auto mb-2" />
//                       {this.state.action === "update" && this.state.uploadFile === false ? (
//                         <button className="btn btn-sm btn-dark mb-1 btn-block" onClick={() => this.setState({ uploadFile: true })}>
//                           Change Product Image
//                         </button>
//                       ) : (
//                         <div>
//                           <strong>Product Image</strong>
//                           <input type="file" className="form-control mb-1" onChange={(ev) => this.setState({ image: ev.target.files[0] })} required />
//                         </div>
//                       )}
//                     </div>

//                     <div className="col-8 mb-2">
//                       <strong>Product Name</strong>
//                       <input type="text" className="form-control mb-1" value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })} required />

//                       <strong>Product Stock</strong>
//                       <input type="number" className="form-control mb-1" value={this.state.stock} onChange={(ev) => this.setState({ stock: ev.target.value })} required />

//                       <strong>Product Price</strong>
//                       <input type="number" className="form-control mb-1" value={this.state.price} onChange={(ev) => this.setState({ price: ev.target.value })} required />
//                     </div>
//                   </div>

//                   <button type="submit" className="btn btn-block btn-success">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
//                       <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
//                       <path d="M8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
//                     </svg>
//                     <t /> Simpan
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";
import DeleteModal from "../../components/DeleteModal";
import AddMarketCategory from "../../components/AddMarketCategory";
import EditMarketCategory from "../../components/EditMarketCategory";

const Market = () => {
  return (
    <>
      <div className="WrapperArea">
        <div className="WrapperBox">
          <div className="TitleBox">
            <h4 className="Title">Marketplace Management</h4>
            {/* <a class="TitleLink" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addCategory">Add Category</a> */}
          </div>
          <div className="SettingsTabs">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#marketPlace"
                >
                  MarketPlace
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#productCategory"
                >
                  Product Category
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="marketPlace">
                <div className="Small-Wrapper">
                  <div className="FilterArea flex-column">
                    <div className="FilterLeft mb-3">
                      <div className="form-group">
                        <label>Search</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                      <div className="form-group">
                        <label>Seller Status</label>
                        <select className="form-control">
                          <option>select</option>
                          <option>approved seller</option>
                          <option>general seller</option>
                        </select>
                      </div>
                      <div className="form-group" style={{ width: 175 }}>
                        <label>Product Category</label>
                        <select className="form-control">
                          <option>select</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Change View</label>
                        <select className="form-control">
                          <option>select</option>
                          <option>marketplace</option>
                          <option>product categories</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <button className="Button">Apply</button>
                        <button className="Button Cancel">
                          <i className="fa fa-refresh" />
                        </button>
                      </div>
                    </div>
                    <div className="FilterRight">
                      <div className="form-group">
                        <label>Timeframe</label>
                        <select className="form-control">
                          <option>Select </option>
                          <option value="Today">Today</option>
                          <option value="Week">This Week</option>
                          <option value="Month">This Month</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="TableList">
                  <table>
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Product ID</th>
                        <th>Product name</th>
                        <th>Category</th>
                        <th>Seller Name</th>
                        <th>Seller Status</th>
                        <th>Total Products </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>12345</td>
                        <td>ABC Product</td>
                        <td>Category Name</td>
                        <td>Seller Name</td>
                        <td>2</td>
                        <td>Approved Seller</td>
                        <td>
                          <div className="Actions">
                            <label className="Switch">
                              <input type="checkbox" />
                              <span className="slider" />
                            </label>
                            <a className="Blue" href="market-details.html">
                              <i className="fa-regular fa-eye" />
                            </a>
                            <a
                              className="Red"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#DeleteMarket"
                            >
                              <i className="fa-solid fa-trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pagination">
                  <a href="#">Prev</a>
                  <a href="#">1</a>
                  <a href="#" className="active">
                    2
                  </a>
                  <a href="#">3</a>
                  <a href="#">Next</a>
                </div>
              </div>
              <div className="tab-pane fade" id="productCategory">
                <div className="TitleBox justify-content-end mb-0">
                  <a
                    className="TitleLink"
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#addCategory"
                    style={{ marginTop: "-81px" }}
                  >
                    Add Category
                  </a>
                </div>
                <div className="Small-Wrapper">
                  <div className="FilterArea">
                    <div className="FilterLeft">
                      <div className="form-group">
                        <label>Search</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <button className="Button">Apply</button>
                        <button className="Button Cancel">
                          <i className="fa fa-refresh" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="TableList">
                  <table>
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Product Category</th>
                        <th>Total Sales</th>
                        <th>Total Sellers</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>ABC Category</td>
                        <td>lorem ipsum</td>
                        <td>lorem ipsum</td>
                        <td>
                          <div className="Actions">
                            <a
                              className="Green"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#editCategory"
                            >
                              <i className="fa-regular fa-pen-to-square" />
                            </a>
                            <a
                              className="Red"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#DeleteCategory"
                            >
                              <i className="fa-solid fa-trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ModalBox">
        <EditMarketCategory
          id="editCategory"
          title="Edit Product Category"
          onConfirm={() => {
            console.log("Product Category edited");
          }}
          // onClose={() => setIsEditRoleOpen(false)}
        />
        <AddMarketCategory
          id="addCategory"
          title="Add Product Category"
          onConfirm={() => {
            console.log("Product category added");
          }}
          //onClose={() => setIsAddRoleOpen(false)}
        />
        <DeleteModal
          id="DeleteCategory"
          title="Delete"
          message="Are you sure you want to delete this category?"
          onConfirm={() => console.log("Category deleted")}
        />
        <DeleteModal
          id="DeleteMarket"
          title="Delete"
          message="Are you sure you want to delete this Market Place?"
          onConfirm={() => console.log("Market deleted")}
        />
      </div>
    </>
  );
};

export default Market;

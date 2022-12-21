import React from "react";
import { Link } from "react-router-dom";
import nophoto from '../../assets/images/nophoto.png';

function ProductList() {
    return (
        <>
            <section className="product-info my-2">
                <div className="container">
                    <div className="d-flex align-items-center ">
                        <h3 className="me-2">Fake Store</h3>
                        <Link className="btn btn-primary btn-sm">
                            <i className="fa fa-plus-circle me-2"></i>
                            Create Product
                        </Link>
                    </div>
                    <p className="fst-italic">Eiusmod culpa ullamco veniam id veniam sit in. Commodo cupidatat proident aute enim ad proident magna culpa non. Fugiat eu consectetur ullamco officia nulla consequat consectetur consequat consequat incididunt ullamco. Enim voluptate nisi ad elit minim velit et occaecat irure sit aliquip duis ut. Ipsum sint ad consectetur dolor proident amet velit nisi cillum qui.</p>
                    <div>
                        <form className="d-flex w-25 align-items-center">
                            <input type="search" className="form-control me-2" />
                            <button className="btn btn-outline-secondary btn-sm">Search</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="show-products mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src={nophoto} alt="no photo" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title me-2">Men's clothers</h5>
                                        <div className="d-flex align-items-center">
                                            <Link className="">
                                                <i className="fa-solid fa-circle-info text-secondary"></i>
                                            </Link>
                                            <Link className="mx-1">
                                                <i className="fa-solid fa-pen text-success"></i>
                                            </Link>
                                            <Link className="">
                                                <i className="fa-solid fa-xmark text-danger"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="card-text">Fugiat nisi ullamco in sint velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src={nophoto} alt="no photo" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title me-2">Men's clothers</h5>
                                        <div className="d-flex align-items-center">
                                            <Link className="">
                                                <i className="fa-solid fa-circle-info text-secondary"></i>
                                            </Link>
                                            <Link className="mx-1">
                                                <i className="fa-solid fa-pen text-success"></i>
                                            </Link>
                                            <Link className="">
                                                <i className="fa-solid fa-xmark text-danger"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="card-text">Fugiat nisi ullamco in sint velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src={nophoto} alt="no photo" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title me-2">Men's clothers</h5>
                                        <div className="d-flex align-items-center">
                                            <Link className="">
                                                <i className="fa-solid fa-circle-info text-secondary"></i>
                                            </Link>
                                            <Link className="mx-1">
                                                <i className="fa-solid fa-pen text-success"></i>
                                            </Link>
                                            <Link className="">
                                                <i className="fa-solid fa-xmark text-danger"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="card-text">Fugiat nisi ullamco in sint velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="no photo" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title me-2">Men's clothers</h5>
                                        <div className="d-flex align-items-center">
                                            <Link className="">
                                                <i className="fa-solid fa-circle-info text-secondary"></i>
                                            </Link>
                                            <Link className="mx-1">
                                                <i className="fa-solid fa-pen text-success"></i>
                                            </Link>
                                            <Link className="">
                                                <i className="fa-solid fa-xmark text-danger"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="card-text">Fugiat nisi ullamco in sint velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="no photo" />
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-title me-2">Men's clothers</h5>
                                        <div className="d-flex align-items-center">
                                            <Link className="">
                                                <i className="fa-solid fa-circle-info text-secondary"></i>
                                            </Link>
                                            <Link className="mx-1">
                                                <i className="fa-solid fa-pen text-success"></i>
                                            </Link>
                                            <Link className="">
                                                <i className="fa-solid fa-xmark text-danger"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="card-text">Fugiat nisi ullamco in sint velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductList;
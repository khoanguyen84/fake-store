import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nophoto from '../../assets/images/nophoto.png';
import ProductService from './../../services/productService';
import CategoryService from './../../services/categoryService';
import Helper from './../../helper/Helper';
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

function ProductList() {
    const [state, setState] = useState({
        loading: false,
        products: [],
        categories: [],
        errorMessage: ""
    })

    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resProducts = await ProductService.getProducts();
                let resCategories = await CategoryService.getCategories();
                setState({
                    ...state,
                    loading: false,
                    products: resProducts.data,
                    categories: resCategories.data
                })
            }
            getData();
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }
    }, [])


    const getCategoryName = (categoryId) => {
        let category = categories.find((cat) => cat.id === categoryId);
        return category.categoryName
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setState({ ...state, loading: true });
        // if (keyword) {
        //     let resProducts = await ProductService.getProducts();
        //     let result = resProducts.data.filter((pdt) =>  pdt.title.toUpperCase().includes(keyword.toUpperCase()) ||
        //                                                 pdt.sizes.includes(keyword.toUpperCase()));
        //     setState({
        //         ...state,
        //         loading: false,
        //         products: result
        //     })
        // }
        // else{
        //     let resProducts = await ProductService.getProducts();
        //     setState({
        //         ...state,
        //         loading: false,
        //         products: resProducts.data
        //     })
        // }
        let resProducts = await ProductService.getProducts();
        setState({
            ...state,
            loading: false,
            products: keyword ? resProducts.data.filter((pdt) => pdt.title.toUpperCase().includes(keyword.toUpperCase()) ||
                pdt.sizes.includes(keyword.toUpperCase()))
                : resProducts.data
        })
    }

    const handleRemoveProduct = async (product) => {
        let confirm = window.confirm(`Are you sure to remove the ${product.title}?`);
        if (confirm) {
            setState({ ...state, loading: true });
            let resRemove = await ProductService.removeProduct(product.id);
            if (resRemove.data) {
                let resProducts = await ProductService.getProducts();
                setState({
                    ...state,
                    loading: false,
                    products: resProducts.data
                })
                toast.success(`${product.title} has been removed`, { position: 'top-right' })
            }
            else {
                toast.info('Something went wrong, please contact adminstrator!');
            }
        }
    }
    const { loading, products, categories } = state;

    return (
        <>
            <section className="product-info my-2">
                <div className="container">
                    <div className="d-flex align-items-center ">
                        <h3 className="me-2">Fake Store</h3>
                        <Link className="btn btn-primary btn-sm" to={"/fake-store/product/create"}>
                            <i className="fa fa-plus-circle me-2"></i>
                            Create Product
                        </Link>
                    </div>
                    <p className="fst-italic">Eiusmod culpa ullamco veniam id veniam sit in. Commodo cupidatat proident aute enim ad proident magna culpa non. Fugiat eu consectetur ullamco officia nulla consequat consectetur consequat consequat incididunt ullamco. Enim voluptate nisi ad elit minim velit et occaecat irure sit aliquip duis ut. Ipsum sint ad consectetur dolor proident amet velit nisi cillum qui.</p>
                    <div>
                        <form onSubmit={handleSearch} className="d-flex w-25 align-items-center">
                            <input type="search" className="form-control me-2"
                                value={keyword}
                                onInput={(e) => setKeyword(e.target.value)}
                            />
                            <button type="submit" className="btn btn-outline-secondary btn-sm">Search</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="show-products mb-2">
                <div className="container">
                    <div className="row">
                        {
                            loading ? <Spinner/> : (
                                products.map((product) => (
                                    <div key={product.id} className="col-md-3 mb-2">
                                        <div className="card">
                                            <img className="photo-md mx-auto d-block" src={product.image || nophoto} alt="no photo" />
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <h5 className="card-title me-2">{getCategoryName(product.categoryId)}</h5>
                                                    <div className="d-flex align-items-center">
                                                        <Link className="">
                                                            <i className="fa-solid fa-circle-info text-secondary"></i>
                                                        </Link>
                                                        <Link className="mx-1">
                                                            <i className="fa-solid fa-pen text-success"></i>
                                                        </Link>
                                                        <span className="">
                                                            <i role="button" title="remove product" className="fa-solid fa-xmark text-danger"
                                                                onClick={() => handleRemoveProduct(product)}
                                                            ></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="card-text">
                                                    <div className="d-flex justify-content-between">
                                                        <span>{product.sizes.join(" | ")}</span>
                                                        <span className="text-success">{Helper.formatCurrency(product.price)}</span>
                                                    </div>
                                                    <p>{product.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductList;
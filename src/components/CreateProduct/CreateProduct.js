import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryService from './../../services/categoryService';
import SizeService from './../../services/sizeService';
import Spinner from "../Spinner/Spinner";
import ProductService from './../../services/productService';
import { toast } from "react-toastify";

function CreateProduct() {
    const [state, setState] = useState({
        loading: false,
        product: {},
        categories: [],
        sizes: [],
        errorMessage: ""
    })

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resCategories = await CategoryService.getCategories();
                let resSizes = await SizeService.getSizes();
                setState({
                    ...state,
                    loading: false,
                    categories: resCategories.data,
                    sizes: resSizes.data
                })
            }
            getData();
        } catch (error) {

        }
    }, [])

    const handleInput = (e) => {
        setState({
            ...state,
            product: {
                ...product,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            setState({ ...state, loading: true });
            async function createProduct() {
                let data = {
                    ...product,
                    sizes: ["M", "XL", "XXL"]
                }
                let resCreate = await ProductService.createProduct(data);
                if (resCreate.data) {
                    toast.success(`${resCreate.data.title} has been created!`);
                    setState({
                        ...state,
                        loading: false,
                        product : {}
                    })
                }

            }
            createProduct();
        } catch (error) {

        }
    }

    const { loading, categories, product, sizes } = state;
    const { title, description, price, image } = product
    return (
        <>
            <section className="create-product-info my-2">
                <div className="container">
                    <h3 className="text-success">Create Product</h3>
                    <p className="fst-italic">Sunt et occaecat adipisicing duis. Proident tempor reprehenderit mollit et culpa aute. Laboris officia velit enim quis do occaecat. Ex Lorem velit id fugiat commodo non do qui esse nisi. Ullamco ea ullamco ea enim dolor. Sunt ex amet dolore incididunt do laboris cillum esse culpa anim dolor.</p>
                </div>
            </section>
            <section className="create-product">
                {
                    loading ? <Spinner /> : (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <form onSubmit={handleCreateProduct}>
                                        <div className="mb-2">
                                            <input type="text" name="title" className="form-control form-control-sm" placeholder="Title"
                                                onInput={handleInput}
                                                value={title}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input type="number" min={100000} name="price" className="form-control form-control-sm" placeholder="Price"
                                                onInput={handleInput}
                                                value={price}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input type="url" name="image" className="form-control form-control-sm" placeholder="Image URL"
                                                onInput={handleInput}
                                                value={image}
                                            />
                                        </div>
                                        <div className="mb-2 d-flex">
                                            {
                                                sizes.map((size) => (
                                                    <div key={size.id} className="form-check mb-2 me-2">
                                                        <input className="form-check-input" value={size.name} type="checkbox" />
                                                        <label className="form-check-label">{size.name}</label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="form-floating mb-2">
                                            <textarea className="form-control" name="description" placeholder="Leave a comment here"
                                                id="description" style={{ height: '100px' }} defaultValue={""}
                                                onInput={handleInput}
                                                value={description}
                                            />
                                            <label htmlFor="description">Description</label>
                                        </div>
                                        <div className="mb-2">
                                            <select name="categoryId" className="form-control form-control-sm" onChange={handleInput}>
                                                {
                                                    categories.map((cat) => (
                                                        <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <button type="submit" className="btn btn-success btn-sm me-2">Create</button>
                                            <Link className="btn btn-dark btn-sm" to={"/fake-store"}>Back</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default CreateProduct;
import axios from "axios";
import { Component } from "react";
import personImg from "../../images/person.svg";
import "./product.scss";

const API__URL = "https://dummyjson.com";

export default class Product extends Component {
  constructor() {
    super(),
      (this.state = {
        data: null,
        categories: null,
        categoryValue: "/products",
        offset: 1,
        loading: false,
      });
  }
  componentDidMount() {
    axios
      .get(
        `${API__URL}${this.state.categoryValue}?limit=${this.state.offset * 6}`
      )
      .then((res) => this.setState({ data: res.data.products }))
      .catch((err) => console.log(err));
    axios
      .get(`${API__URL}/products/categories`)
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.offset !== prevState.offset ||
      this.state.categoryValue !== prevState.categoryValue
    ) {
      axios
        .get(
          `${API__URL}${this.state.categoryValue}?limit=${
            this.state.offset * 6
          }`
        )
        .then((res) => this.setState({ data: res.data.products }))
        .catch((err) => console.log(err));
    }
  }

  render() {
    console.log(this.state.offset);
    return (
      <section className="product container">
        <h2 style={{ textAlign: "center", padding: "30px 0px" }}>Product</h2>
        <ul className="category">
          <li>
            <data
              style={{
                background:
                  this.state.categoryValue === `/products` ? "black" : "white",
                color:
                  this.state.categoryValue === `/products` ? "white" : "black",
              }}
              onClick={(e) => this.setState({ categoryValue: e.target.value })}
              value="/products"
            >
              All
            </data>
          </li>
          {this.state.categories?.map((el) => (
            <li key={el}>
              <data
                style={{
                  background:
                    this.state.categoryValue === `/products/category/${el}`
                      ? "black"
                      : "white",
                  color:
                    this.state.categoryValue === `/products/category/${el}`
                      ? "white"
                      : "black",
                }}
                onClick={(e) =>
                  this.setState({ categoryValue: e.target.value })
                }
                value={`/products/category/${el}`}
              >
                {el}
              </data>
            </li>
          ))}
        </ul>
        <div className="product__cards">
          {this.state.data?.map((product) => (
            <div key={product.id} className="product__card">
              <div className="product__img">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="product__info">
                <h3 className="product__title">{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p className="product__desc">{product.description}</p>
                <button className="product__btn">Buy now</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="product__seMore__btn"
          onClick={() => this.setState({ offset: this.state.offset + 1 })}
        >
          See more
        </button>
        <div className="product__person">
          <img src={personImg} alt="" />
        </div>
      </section>
    );
  }
}

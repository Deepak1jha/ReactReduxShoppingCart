import React from 'react';
import './App.css';
import {addProduct, removeProduct} from "./redux/product/product";
import configureStore from "./redux/store/configureStore";
import {Badge, Card} from "antd";
import {connect} from "react-redux";

const store = configureStore();

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    const ar = [
      {name: "dee", age: 26},
      {name: "desdfe", age: 263},
      {name: "desfe", age: 266},
      {name: "desfe", age: 265},
      {name: "desdfe", age: 2996},
    ]
    console.log(ar.length)
    ar.splice(1, 1)
    console.log(ar.length)
    console.log(ar)

  }

  setPrice() {
    const temp = this.state.list;
    return temp.reduce((sum, items) => {
      return items.price + sum;
    }, 0);
  }

  setNumberOfItem() {
    const temp = this.state.list;
    return temp.length;
  }

  render() {
    const obj = this;
    return (
      <div className="App">
        <a href="#" className="head-example"/>
        <header className="App-header">
          <Badge className="float-right" count={obj.setNumberOfItem()}/>
          <button onClick={function () {
            store.dispatch(addProduct({
              name: "product 6" + Math.floor(Math.random() * 1000),
              price: Math.floor(Math.random() * 10),
              mrp: Math.floor(Math.random() * 10),
              quantity: Math.floor(Math.random() * 10)
            }));
            const products = store.getState().entities.product;
            obj.setState({list: products})
            console.log(obj.state)
          }}>click
          </button>
        </header>
        {obj.state.list.map((item) => {
          return (
            <>
              <div className="site-card-border-less-wrapper">
                <Card title="Card title" bordered={true} style={{width: 300}}>
                  <p key={item.name + item.price}>{item.name}</p>
                  <p>Price : {item.price}</p>
                  <p>Mrp : {item.mrp}</p>
                  <p>Quantity : {item.quantity}</p>
                  <p>Total Price : {item.quantity}</p>
                  <button onClick={function () {
                    store.dispatch(removeProduct({id: item.id}));
                  }}>remove
                  </button>
                </Card>
              </div>
            </>
          )
        })}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.entities.product
  }
}

export default connect(mapStateToProps)(App)

import React from 'react';
import './App.css';
import {addProduct} from "./redux/product/product";
import configureStore from "./redux/store/configureStore";
import PRODUCT_DATA from "./produtData/productData";
import {connect} from "react-redux";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import {Button, Card, Col, Row} from "reactstrap";
import CardBody from "reactstrap/es/CardBody";

const store = configureStore();

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    // const ar = [
    //   {name: "dee", age: 26},
    //   {name: "desdfe", age: 263},
    //   {name: "desfe", age: 266},
    //   {name: "desfe", age: 265},
    //   {name: "desdfe", age: 2996},
    // ]
    // console.log(ar.length)
    // ar.splice(1, 1)
    // console.log(ar.length)
    // console.log(ar)
    console.log(store.getState().entities.product)
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
      <Container className="mt--12" fluid>
        <Row>
          <Col className="col-xl-9"><Card>
            <GridList cellHeight={150} cols={3}>
              {PRODUCT_DATA.map(function (value, index) {
                return (
                  <div className="card col-lg-4" style={{width: '18rem', height: `15`}}>
                    <img alt="..."
                         src={value.url}
                         className="card-img-top"/>
                    <div className="card-body">
                      <Row>
                        <Col><h2 className="text-uppercase ls-1 text-primary py-3 mb-0">{value.name}</h2>
                        </Col>
                      </Row>
                      <small className="text-muted">{""}</small>
                      <hr/>
                      <Row>
                        <Col className="col-md-6  ">
                          <div className="h3 mb-0 card-title">MRP</div>
                        </Col>
                        <Col className="col-md-6 ">
                          <span className="text-nowrap">Rs. {value.mrp} </span>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="col-md-6  ">
                          <div className="h3 mb-0 card-title">Price</div>
                        </Col>
                        <Col className="col-md-6 ">
                          <p className=" mb-0 ">
                           <span
                             className="text-nowrap mr-3">{value.price}</span>(<span className="text-success"><i
                            className="fa fa-arrow-down"/> {value.mrp - value.price}</span>)
                          </p>
                        </Col>
                      </Row>
                      <hr/>
                      <Row>
                        <Col className="col-md-6  ">
                          <div className="h3 mb-0 card-title">Quantity</div>
                        </Col>
                        <Col className="col-md-6 ">
                          <span className="text-nowrap">{value.quantity} </span>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="col-md-6  ">
                          <div className="h3 mb-0 card-title">Number</div>
                        </Col>
                        <Col className="col-md-6 ">
                          <span className="text-nowrap">{value.productUniqueId} </span>
                        </Col>
                      </Row>
                    </div>
                    <Button onClick={function () {
                      store.dispatch(addProduct({
                        name: "product 6" + Math.floor(Math.random() * 1000),
                        price: Math.floor(Math.random() * 10),
                        mrp: Math.floor(Math.random() * 10),
                        quantity: Math.floor(Math.random() * 10)
                      }));
                      const products = store.getState().entities.product;
                      obj.setState({list: products})
                      console.log(obj.state)
                    }}>add to cart</Button>
                  </div>
                )
              })}
            </GridList>
          </Card></Col>
          <Col className="col-3">
            <Card>
              <CardBody>
                {store.getState().entities.product.map(function (value, index) {
                  return(
                    <>
                      <div className="card" >
                        <img alt="..."
                             src={value.url}
                             className="card-img-top"/>
                        <div className="card-body">
                          <Row>
                            <Col><h6 className="text-uppercase ls-1 text-primary py-3 mb-0">{value.name}</h6>
                            </Col>
                          </Row>
                          <small className="text-muted">{""}</small>
                          <hr/>
                          <Row>
                            <Col className="col-md-6  ">
                              <div className="h6 mb-0 card-title">Price</div>
                            </Col>
                            <Col className="col-md-6 ">
                              <p className=" mb-0 ">
                           <span
                             className="text-nowrap mr-3">{value.price}</span>(<span className="text-success"><i
                                className="fa fa-arrow-down"/> {value.mrp - value.price}</span>)
                              </p>
                            </Col>
                          </Row>
                          <hr/>
                        </div>
                      </div>
                    </>
                    )
                })}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.entities.product
  }
}

export default connect(mapStateToProps)(App)

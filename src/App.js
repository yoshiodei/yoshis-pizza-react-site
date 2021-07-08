import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
          <div className="main__ads">
              <div className="main__ads__ad"></div>
              <div className="main__ads__ad"></div>
          </div>
          <div className="main__menu">
            <div className="menu__header">
                <h2>Menu</h2>
                <ul className="menu__list">
                    <li className="menu__list__item"><a className="active">Pizza</a></li>
                    <li className="menu__list__item"><a>Side Meal</a></li>
                    <li className="menu__list__item"><a>Ice cream</a></li>
                    <li className="menu__list__item"><a>Drinks</a></li> 
                </ul>
            </div>
            <div className="menu__content">
                <div className="menu__card">
                    <div className="menu__card__div__img">
                    </div>
                    <div className="menu_card__div">
                        <h4 className="menu_card__head">Cheesy Peperoni Pizza</h4>
                        <hr className="menu_card__line" />
                        <div className="menu_card__data__div">
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Large</p>
                                  <p className="menu_card__data">$26.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Medium</p>
                                  <p className="menu_card__data">$22.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Small</p>
                                  <p className="menu_card__data">$18.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div>               
                        </div>                 
                    </div>
                </div>   
                <div className="menu__card">
                    <div className="menu__card__div__img">
                    </div>
                    <div className="menu_card__div">
                        <h4 className="menu_card__head">Cheesy Peperoni Pizza</h4>
                        <hr className="menu_card__line" />
                        <div className="menu_card__data__div">
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Large</p>
                                  <p className="menu_card__data">$26.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Medium</p>
                                  <p className="menu_card__data">$22.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Small</p>
                                  <p className="menu_card__data">$18.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div>               
                        </div>                 
                    </div>
                </div> 
                <div className="menu__card">
                    <div className="menu__card__div__img">
                    </div>
                    <div className="menu_card__div">
                        <h4 className="menu_card__head">Cheesy Peperoni Pizza</h4>
                        <hr className="menu_card__line" />
                        <div className="menu_card__data__div">
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Large</p>
                                  <p className="menu_card__data">$26.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Medium</p>
                                  <p className="menu_card__data">$22.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Small</p>
                                  <p className="menu_card__data">$18.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div>               
                        </div>                 
                    </div>
                </div>   
                <div className="menu__card">
                    <div className="menu__card__div__img">
                    </div>
                    <div className="menu_card__div">
                        <h4 className="menu_card__head">Cheesy Peperoni Pizza</h4>
                        <hr className="menu_card__line" />
                        <div className="menu_card__data__div">
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Large</p>
                                  <p className="menu_card__data">$26.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Medium</p>
                                  <p className="menu_card__data">$22.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div> 
                              <div className="menu_card__data__row">
                                  <p className="menu_card__data">Small</p>
                                  <p className="menu_card__data">$18.00</p>
                                  <button className="menu_card__data">Add</button>
                              </div>               
                        </div>                 
                    </div>
                </div>  
            </div>
          </div>
          <div className="main__cart">
              <div className="cart__header">
                  <h2>Order List</h2>
              </div>
              <div className="cart__order">
                  <ul className="cart__order__list">
                      <li className="cart__order__list-item">
                          <div className="cart__order__list__row">
                              <h5>Cheesy Peperoni Pizza</h5>
                              <h5>(Large)</h5>
                          </div>
                          <hr />
                          <div className="cart__order__list__row marg-b">
                              <p className="cart__order__list__quantity">Quantity: 1</p>
                              <p className="cart__order__list__price">Price: $ 26.00</p>
                          </div>
                          <div className="cart__order__list__row">
                            <div className="cart__order__list__quantity__div">
                                  <button>+</button>
                                  <button>-</button>
                              </div>
                                  <button className="cart__order__list__remove">Remove</button>
                          </div>
                      </li>
                      <hr className="cart__order__list__divider" />
                      <li className="cart__order__list-item">
                          <div className="cart__order__list__row">
                              <h5>Cheesy Peperoni Pizza</h5>
                              <h5>(Large)</h5>
                          </div>
                          <hr />
                          <div className="cart__order__list__row marg-b">
                              <p className="cart__order__list__quantity">Quantity: 1</p>
                              <p className="cart__order__list__price">Price: $ 26.00</p>

                          </div>
                          <div className="cart__order__list__row">
                            <div className="cart__order__list__quantity__div">
                                  <button>+</button>
                                  <button>-</button>
                              </div>
                                  <button className="cart__order__list__remove">Remove</button>
                          </div>
                      </li>
                      <hr className="cart__order__list__divider" />
                      <li className="cart__order__list-item">
                          <div className="cart__order__list__row">
                              <h5>Cheesy Peperoni Pizza</h5>
                              <h5>(Large)</h5>
                          </div>
                          <hr />
                          <div className="cart__order__list__row marg-b">
                              <p className="cart__order__list__quantity">Quantity: 1</p>
                              <p className="cart__order__list__price">Price: $ 26.00</p>

                          </div>
                          <div className="cart__order__list__row">
                            <div className="cart__order__list__quantity__div">
                                  <button>+</button>
                                  <button>-</button>
                              </div>
                                  <button className="cart__order__list__remove">Remove</button>
                          </div>
                      </li>
                      <hr className="cart__order__list__divider" />
                  </ul>
                  <div className="cart__order__submit">
                    <div className="cart__order__label__div">
                          <label className="cart__order__label">Total:</label>
                          <div className="cart__order__total__calc">
                              <h4>$</h4>
                              <input type="text" readonly value="0.00" />
                          </div> 
                      </div> 
                      <button className="cart__order__btn">Place Order</button>  
                  </div>
              </div>
          </div>             
      </section>  
    </div>
  );
}

export default App;

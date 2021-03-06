import React from 'react';
import MiniCartList from './minicart';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      state: '',
      creditCard: '',
      expMonth: '',
      expYear: '',
      cvv: '',
      validate: {
        fullName: true,
        email: true,
        address1: true,
        city: true,
        zip: true,
        state: true,
        creditCard: true,
        expMonth: true,
        expYear: true,
        cvv: true
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.validateForm();
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.props.placeOrder(this.state);
  }

  validateForm() {
    const validate = {
      fullName: true,
      email: true,
      address1: true,
      city: true,
      zip: true,
      state: true,
      creditCard: true,
      expMonth: true,
      expYear: true,
      cvv: true
    };

    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const zipRegex = RegExp(/^\d{1,5}$/);
    const alphaRegex = RegExp(/^[A-Za-z ]+$/);
    const cardRegex = RegExp(/^[0-9 ]*$/);

    if (this.state.fullName.length < 5) {
      validate.fullName = false;
    }

    if (!alphaRegex.test(this.state.fullName)) {
      validate.fullName = false;
    }

    if (this.state.email.length < 6) {
      validate.email = false;
    }

    if (!emailRegex.test(this.state.email)) {
      validate.email = false;
    }

    if (this.state.address1.length < 6) {
      validate.address1 = false;
    }

    if (this.state.city.length < 3) {
      validate.city = false;
    }

    if (!alphaRegex.test(this.state.city)) {
      validate.city = false;
    }

    if (this.state.zip.length < 4) {
      validate.zip = false;
    }

    if (!zipRegex.test(this.state.zip)) {
      validate.zip = false;
    }

    if (this.state.state === '') {
      validate.state = false;
    }

    if (this.state.creditCard.length < 15) {
      validate.creditCard = false;
    }

    if (!cardRegex.test(this.state.creditCard)) {
      validate.creditCard = false;
    }

    if (this.state.expMonth === '') {
      validate.expMonth = false;
    }

    if (this.state.expYear === '') {
      validate.expYear = false;
    }

    if (this.state.cvv.length < 2) {
      validate.cvv = false;
    }

    if (!cardRegex.test(this.state.cvv)) {
      validate.cvv = false;
    }

    this.setState({ validate });
  }

  render() {
    const {
      fullName,
      email,
      address1,
      city,
      zip,
      state,
      creditCard,
      expMonth,
      expYear,
      cvv
    } = this.state;

    let totalPrice = 0;
    this.props.viewPrice.filter(
      product => (totalPrice = totalPrice + (product.quantity * product.price))
    );

    const miniCart = this.props.cartQuantity.map(item => {
      return (
        <MiniCartList
          key={item.productId}
          id={item.productId}
          item={item}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });

    const checkFullName = this.state.validate.fullName ? null : 'is-invalid';
    const checkEmail = this.state.validate.email ? null : 'is-invalid';
    const checkAddress = this.state.validate.address1 ? null : 'is-invalid';
    const checkCity = this.state.validate.city ? null : 'is-invalid';
    const checkZip = this.state.validate.zip ? null : 'is-invalid';
    const checkState = this.state.validate.state ? null : 'is-invalid';
    const checkCard = this.state.validate.creditCard ? null : 'is-invalid';
    const checkMonth = this.state.validate.expMonth ? null : 'is-invalid';
    const checkYear = this.state.validate.expYear ? null : 'is-invalid';
    const checkCvv = this.state.validate.cvv ? null : 'is-invalid';

    const isEnabled =
      fullName.length > 0 &&
      email.length > 0 &&
      address1.length > 0 &&
      city.length > 0 &&
      zip.length > 0 &&
      state.length > 0 &&
      creditCard.length > 0 &&
      expMonth.length > 0 &&
      expYear.length > 0 &&
      cvv.length > 0;

    const activePointer = isEnabled ? 'link-pointer' : null;

    const alphabet = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];

    return (
      <div className="container fade-in">
        <h1>Checkout</h1>
        <p className="warning">
          Please do not use real personal information in the form.
        </p>
        <div className="row">
          <div className="col-md-4 order-md-2">
            <h4 className="d-flex justify-content-between align-items-center">
              <p className="text-muted">Your cart summary</p>
            </h4>
            <ul className="list-group mb-5">
              {miniCart}
              <li className="list-group-item d-flex justify-content-between">
                <span>Order Total:</span>
                <strong>{'$' + (totalPrice / 100).toFixed(2)}</strong>
              </li>
            </ul>
          </div>

          <form className="col-md-8" onSubmit={this.handleInputSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>
                  Full name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Riley Doe"
                  value={this.state.fullName}
                  className={`form-control ${checkFullName}`}
                  onChange={this.handleInputChange}
                  maxLength="65"
                  required
                />
                <div className="invalid-feedback">
                  Name must be longer than 5 characters and alphabet characters
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className={`form-control ${checkEmail}`}
                  placeholder="you@example.com"
                  onChange={this.handleInputChange}
                  maxLength="254"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>
                  Address Line 1 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="address1"
                  value={this.state.address1}
                  className={`form-control ${checkAddress}`}
                  placeholder="123 ABC St"
                  onChange={this.handleInputChange}
                  maxLength="42"
                  required
                />
                <div className="invalid-feedback">
                  Address must be longer than 6 characters
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>Address Line 2</label>
                <input
                  type="text"
                  name="address2"
                  value={this.state.address2}
                  className="form-control"
                  placeholder="Apartment, suite, etc. (Optional)"
                  onChange={this.handleInputChange}
                  maxLength="42"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label>
                  City <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Some City"
                  value={this.state.city}
                  className={`form-control ${checkCity}`}
                  onChange={this.handleInputChange}
                  maxLength="50"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid city
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label>
                  Zip Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  placeholder="00000"
                  value={this.state.zip}
                  className={`form-control ${checkZip}`}
                  onChange={this.handleInputChange}
                  onKeyDown={event =>
                    alphabet.includes(event.key) &&
                    event.preventDefault()
                  }
                  maxLength="5"
                  required
                />
                <div className="invalid-feedback">
                  Valid zip code is required
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label>
                  State <span className="text-danger">*</span>
                </label>
                <select
                  name="state"
                  value={this.state.state}
                  className={`form-control ${checkState}`}
                  onChange={this.handleInputChange}
                  maxLength="2"
                  required
                >
                  <option value="">Choose...</option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>
                <div className="invalid-feedback">Select a state</div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>
                  Credit card number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="creditCard"
                  value={this.state.creditCard}
                  className={`form-control ${checkCard}`}
                  onKeyDown={event =>
                    alphabet.includes(event.key) &&
                    event.preventDefault()
                  }
                  placeholder="0000 0000 0000 0000"
                  onChange={this.handleInputChange}
                  maxLength="16"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid credit card number
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label>
                  Expiration date <span className="text-danger">*</span>
                </label>
                <div className="d-flex">
                  <select
                    name="expMonth"
                    value={this.state.expMonth}
                    className={`form-control col mr-2 ${checkMonth}`}
                    onChange={this.handleInputChange}
                    maxLength="2"
                    required
                  >
                    <option value="">Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    name="expYear"
                    value={this.state.expYear}
                    className={`form-control col ${checkYear}`}
                    onChange={this.handleInputChange}
                    minLength="4"
                    maxLength="4"
                    required
                  >
                    <option value="">Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label>
                  CVV <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="000"
                  value={this.state.cvv}
                  className={`form-control ${checkCvv}`}
                  onKeyDown={event =>
                    alphabet.includes(event.key) &&
                    event.preventDefault()
                  }
                  onChange={this.handleInputChange}
                  maxLength="4"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid CVV number
                </div>
              </div>
            </div>

            <div className="container d-flex justify-content-between mt-3 mb-5">
              <div
                className="link-pointer text-muted"
                onClick={() => this.props.setView('catalog')}
              >
                <i className="fas fa-angle-double-left mr-2" />
                Continue Shopping
              </div>
              <button
                disabled={!isEnabled}
                type="submit"
                className={`${activePointer} btn btn-primary`}
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;

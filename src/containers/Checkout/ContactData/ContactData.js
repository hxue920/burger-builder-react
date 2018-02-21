import React, { Component } from 'react';

import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postal: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Hojo X',
        address: {
          street: '123 Abc St',
          zipCode: '98765',
          Country: 'USA'
        },
        email: 'fake@notreal.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false})
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false})
      });
    console.log(this.props.ingredients);
  }

  render () {
    let form = (
      <form>
        <Input inputtype="input" type="text" label="Name" name="name" placeholder="Your name" />
        <Input inputtype="input" type="email" label="Email" name="email" placeholder="Your Email" />
        <Input inputtype="input" type="text" label="Address" name="street" placeholder="Street address" />
        <Input inputtype="input" type="text" label="ZIP Code" name="postal" placeholder="Postal" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
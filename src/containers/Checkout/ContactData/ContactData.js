import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.module.css';

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            class={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            class={classes.Input}
            type="text"
            name="email"
            placeholder="Your Mail"
          />
          <input
            class={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            class={classes.Input}
            type="text"
            name="postalCode"
            placeholder="Postal Code"
          />

          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

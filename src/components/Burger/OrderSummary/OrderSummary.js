import React from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    ingredientKey => (
      <li key={ingredientKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:{' '}
        {props.ingredients[ingredientKey]}
      </li>
    )
  );

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price:</strong> {props.price.toFixed(2)}
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.number,
  purchaseCancelled: PropTypes.func,
  purchaseContinued: PropTypes.func,
};

export default orderSummary;

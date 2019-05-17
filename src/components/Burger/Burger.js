import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(ingredientKey =>
      [...Array(props.ingredients[ingredientKey])].map((_, index) => (
        <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
      ))
    )
    .reduce((prevVal, currentVal) => prevVal.concat(currentVal), []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default burger;

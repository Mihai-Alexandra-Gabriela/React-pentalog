import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

const Product = props => {
  const { id } = props;
  return (
    <Card
      shadow={0}
      style={{
        // height: "300px",
        width: "280px",
        flex: 1,
        margin: "20px"
        // backgroundColor: "white"
      }}
    >
      {/* daca vrem name 

       <CardTitle                     
          style={{
            alignItems: "flex-end",
            height: "300px",
            color: "white",
            background: `url(${props.photoUrl}) center / cover`
          }}>{props.name}
        </CardTitle>

       daca nu vrem name */}
      <CardTitle
        style={{
          alignItems: "flex-end",
          height: "300px",
          background: `url(${props.photoUrl}) center / cover`
        }}>
      </CardTitle>

      <CardText>{props.description}</CardText>

      <CardActions border>
        <Button onClick={() =>props.onAddToCart(id)}>
          Add to cart
        </Button>
        <CardText>
          Price: {props.unitPrice} $</CardText>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  unitPrice: PropTypes.number
};

export default Product;

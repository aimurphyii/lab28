import React from "react";

function Item(props) {
  this.text = props.text;
  this.id = Math.random();
  this.complete = false;
}
Item.prototype.toggle = function() {
  this.complete = !this.complete;
};

export default Item;

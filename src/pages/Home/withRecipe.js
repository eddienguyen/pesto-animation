import React from "react";
import recipes from "../../assets/data";

export default Component => props => {
  return <Component recipes={recipes} {...props} />;
};

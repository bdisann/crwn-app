import React from "react";

import CollectionPreview from "../../components/colletion-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colletions: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.colletions.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

import React, { Component } from "react";

import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import Headerlinks from "../Header/Headerlinks";
import HeaderLinkWith_img from "./HeaderLinkWith_img";

class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>
            {/* <HeaderLinkWith_img linkUrl="/logo/" image={logo} />WHY CANT WE SAY THIS LOGO IS PART OF SEARCH AND CART  */}
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Headerlinks linkUrl="/mac" linkName="Mac" />
                <Headerlinks linkUrl="#" linkName="iphone" />
                <Headerlinks linkUrl="#" linkName="ipad" />
                <Headerlinks linkUrl="#" linkName="watch" />
                <Headerlinks linkUrl="#" linkName="tv" />
                <Headerlinks linkUrl="#" linkName="Music" />
                <Headerlinks linkUrl="#" linkName="Support" />

                <HeaderLinkWith_img linkUrl="/search/" image={search} />
                <HeaderLinkWith_img linkUrl="/cart/" image={cart} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

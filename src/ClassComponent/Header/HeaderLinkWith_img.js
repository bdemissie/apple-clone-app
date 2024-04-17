import React, { Component } from 'react'

 class HeaderLinkWith_img extends Component {
  render() {
    return (
        <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>< img src= {this.props.image}alt=""/></a>
        </li>    
    )
  }
}
export default HeaderLinkWith_img
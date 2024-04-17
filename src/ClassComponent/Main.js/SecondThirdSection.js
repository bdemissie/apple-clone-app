import React, { Component } from "react";

class SecondThirdSection extends Component {
    render() {
        return (
            <>
                <div className={this.props.titleWraper}>{this.props.title}</div>
                <div className={this.props.descriptionWrapper}>
                    {this.props.description}
                </div>
                <div className={this.props.priceWrapper}>{this.props.price}</div>

                
                <div className="links-wrapper">
                    <ul>
                        <li>
                            <a href="">Learn more</a>
                        </li>
                        <li>
                            <a href="">Buy</a>
                        </li>
                    </ul>
                </div>
          </>
        );
    }
}
export default SecondThirdSection;

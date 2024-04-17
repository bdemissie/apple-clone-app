import React, { Component } from 'react'
import SecondThirdSection from './SecondThirdSection';
 class ThirdSection extends Component {
  render() {
    return (
      <section className="third-hightlight-wrapper">
		<div className="container">


		<SecondThirdSection titleWraper="title-wraper bold" title="iPhone 11 Pro "
		descriptionWrapper="description-wrapper" description="Pro cameras. Pro display. Pro performance."
		priceWrapper="price-wrapper" price="From $24.95/mo. or $599 with trade‑in."/>
			</div>


	</section>
    )
  }
}
export default ThirdSection
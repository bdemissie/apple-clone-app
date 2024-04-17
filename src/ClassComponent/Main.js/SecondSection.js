import React, { Component } from 'react'
import SecondThirdSection from './SecondThirdSection'

 class SecondSection extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
		<div className="container">

			<div className="new-alert">New</div>
			<SecondThirdSection titleWraper="title-wraper bold black" title= "MacBook Air "
			descriptionWrapper="description-wrapper black" description="Twice the speed. Twice the storage."
			priceWrapper="price-wrapper grey" price="From $999."/>

		</div>
	</section>
    )
  }
}
export default SecondSection
import React, { Component } from "react";
import styles from "./ListItemMarketPlace.module.css";
import MAvatar from "../../components/Avatar";
import { OfferButton } from "../../components/Button/ButtonFullWidth";
import { SellText } from "../../components/TextTypo";
import ShowValue from "../../components/ShowValue";
import {withRouter} from "react-router-dom";
import RatingDiabled from "../../components/Rating/RatingDisabled";
class ListItemMarketPlaceSell extends Component {
	handleClick(){
		const id = this.props.id;
		this.props.history.push(`/item/${id}`);
    
	}
	render() {
		const { itemData } = this.props;
		const {
			amountMoney,
			autoAcceptOffer,
			currencyBuy,
			currencySell,
			description,
			liveRate,
			location,
			minOffer,
			title,
			type,
			userProfile
		} = itemData;
		const {avatar, 
			displayName,
		} = userProfile;

		return (
			<div className={styles.wrapItem}>
				<MAvatar
					src={avatar}
					size="10px"
					userName={displayName}
					className={styles.item}
				/>{" "}
				<hr className={styles.devider} />
				<div className={styles.item}>
					<RatingDiabled stars={4} />
				</div>
				<hr className={styles.devider} />
				<div className={styles.item}>
					<SellText />
				</div>
				<hr className={styles.devider} />
				<div className={styles.item}>
					<i className="fas fa-map-marker-alt" style={{marginRight: "5px"}}/> {location}
				</div>
				<div className={styles.wrapShowValue}>
					<div className={styles.showValue}>
						<ShowValue data ={{currencyBuy, autoAcceptOffer, currencySell,location,type, amountMoney}} />
					</div>
				</div>
				<OfferButton name="Offer" className={styles.buttonOffer} onCustomClick={this.handleClick.bind(this)}/>
			</div>
		);
	}
}
export default withRouter(ListItemMarketPlaceSell);
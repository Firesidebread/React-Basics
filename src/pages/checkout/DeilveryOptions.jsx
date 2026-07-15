import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceShippingStr = "Free Delivery";
        if (deliveryOption.priceCents > 0) {
          priceShippingStr = `$${formatMoney(
            deliveryOption.priceCents
          )} Shipping`;
        }
        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedTimeMs).format("dddd,MMMM D")}
                Tuesday, June 21
              </div>
              <div className="delivery-option-price">{priceShippingStr}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

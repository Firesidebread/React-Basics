import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
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
        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/:${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id,
          });
          await loadCart();
        };
        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
            onChange={() => {}}
          >
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

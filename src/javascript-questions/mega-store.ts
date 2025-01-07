interface Discount {
  Standard: string;
  Seasonal: string;
  Weight: string;
}

export const DiscountType: Discount = {
  Standard: "Standard",
  Seasonal: "Seasonal",
  Weight: "Weight",
};

export function getDiscountedPrice(
  cartWeight: number,
  totalPrice: number,
  discountType: string
): number {
  switch (discountType) {
    case DiscountType.Standard:
      return (totalPrice = totalPrice - (6 / 100) * totalPrice);

    case DiscountType.Seasonal:
      return (totalPrice = totalPrice - (12 / 100) * totalPrice);

    case DiscountType.Weight:
      return (totalPrice =
        cartWeight <= 10
          ? totalPrice - (6 / 100) * totalPrice
          : totalPrice - (18 / 100) * totalPrice);

    default:
      return totalPrice;
  }
}

/*

standart => 6% (weight any)
Seasonal => 12% (weight any)
weight <= 10 => 6%
weight > 10 => 18%

*/

import { ProductType } from "@/types/types";
import { displayAsCurrency } from "@/utils/dataUtils";
import AddToCardButton from "./AddToCartButton";
import WinPrijs from "./WInPrijs";

export default function PriceContainer({ product }: { product: ProductType }) {
	return (
		<div className="product-card__price-container">
			<div className="flex flex-col items-end py-3 gap-1 h-full">
				{product.suggestedPrice && <WinPrijs />}

				<div className="flex flex-col items-end px-2">
					{product.suggestedPrice && (
						<span className="product-card__adviesprijs">
							Adviesprijs {displayAsCurrency(product.suggestedPrice)}
						</span>
					)}

					<span className="product-card__verkoopprijs">
						{displayAsCurrency(product.retailPrice)}
					</span>

					<AddToCardButton product={product} />
				</div>

				<span className="product-card__levertijd">
					<span className="product-card__dot"></span>
					{product.deliveryInfo}
				</span>
			</div>
		</div>
	);
}

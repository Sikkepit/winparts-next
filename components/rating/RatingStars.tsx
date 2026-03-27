import Icon from "../icon/Icon";
import "./ratingstars.css";

export default function RatingStars({ rating }: { rating?: number }) {
	const maxStars = 5;
	if (!rating || rating > maxStars) return <></>;

	const fullStars = Math.round(rating);
	const emptyStars = maxStars - fullStars;

	return (
		<div className="flex gap-1">
			{Array.from({ length: fullStars }).map((__, index) => (
				<Icon variant="ratingStartFull" className="rating-star" key={index} />
			))}

			{Array.from({ length: emptyStars }).map((__, index) => (
				<Icon variant="ratingStartEmpty" className="rating-star" key={index} />
			))}
		</div>
	);
}

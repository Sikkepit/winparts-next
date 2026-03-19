import Image from "next/image";
import "./header.css";
import HeaderUsps from "./HeaderUsps";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
	return (
		<header className="header">
			<section className="grid grid-cols-12">
				<div className="col-span-3 header__logo">
					<Image
						src="/logo.webp"
						alt="Winparts logo"
						width={126}
						height={126}
						loading="eager"
					/>
				</div>

				<div className="col-span-9 header__content">
					<HeaderUsps />
					<HeaderSearch />
				</div>
			</section>
		</header>
	);
}

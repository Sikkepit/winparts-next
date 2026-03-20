import Image from "next/image";
import HeaderUsps from "./HeaderUsps";
import HeaderSearch from "./HeaderSearch";
import HeaderCategories from "./HeaderCategories";

import "./header.css";

export default function Header() {
	return (
		<header className="header">
			<section className="grid grid-cols-12">
				<div className="col-span-3 header__logo">
					<Image
						src="/logo2.webp"
						alt="Winparts logo"
						width={160}
						height={160}
						loading="eager"
					/>
				</div>

				<div className="col-span-9 header__content">
					<HeaderUsps />
					<HeaderSearch />
					<HeaderCategories />
				</div>
			</section>
		</header>
	);
}

import Image from "next/image";
import Link from "next/link";
import HeaderUsps from "./HeaderUsps";
import HeaderSearch from "./HeaderSearch";
import HeaderCategories from "./HeaderCategories";
import HeaderCart from "./HeaderCart";

import "./header.css";

export default function Header() {
	return (
		<header className="header">
			<section className="grid grid-cols-12">
				<div className="col-span-3 header__logo">
					<Link href="/">
						<Image
							src="/logo.webp"
							alt="Winparts logo"
							width={160}
							height={160}
							loading="eager"
						/>
					</Link>
				</div>

				<div className="col-span-9 header__content">
					<HeaderUsps />
					<HeaderSearch />
					<HeaderCategories />
					<HeaderCart />
				</div>
			</section>
		</header>
	);
}

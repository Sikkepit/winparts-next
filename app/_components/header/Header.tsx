"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderUsps from "./HeaderUsps";
import HeaderSearch from "./HeaderSearch";
import HeaderCategories from "./HeaderCategories";
import HeaderCart from "./HeaderCart";

import HeaderCartButton from "./HeaderCartButton";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import "./header.css";

export default function Header() {
	const [showCartContents, setShowCardContents] = useState(false);
	const headerCartRef = useRef<HTMLDivElement>(null);

	useClickOutside(headerCartRef, () => setShowCardContents(false));

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
					<div className="flex flex-col gap-4">
						<HeaderUsps />
						<HeaderSearch />

						<div className="flex gap-4">
							<HeaderCategories />
							<HeaderCartButton
								onClick={() => {
									setShowCardContents((oldValue) => !oldValue);
								}}
							/>
						</div>
					</div>

					{showCartContents && <HeaderCart ref={headerCartRef} />}
				</div>
			</section>
		</header>
	);
}

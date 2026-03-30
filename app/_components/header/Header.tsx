"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderUsps from "./HeaderUsps";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./cart/HeaderCart";
import HeaderCartButton from "./cart/HeaderCartButton";

import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useKeydown } from "@/hooks/useKeydown";
import "./header.css";

export default function Header({ children }: { children: React.ReactNode }) {
	const [showCartContents, setShowCardContents] = useState(false);
	const headerCartRef = useRef<HTMLDivElement>(null);

	const hideCart = () => {
		if (showCartContents) setShowCardContents(false);
	};

	useClickOutside(headerCartRef, () => hideCart());
	useKeydown("Escape", () => hideCart());

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
							{children}

							<HeaderCartButton
								onClick={() => {
									setShowCardContents((oldValue) => !oldValue);
								}}
							/>
						</div>
					</div>

					{showCartContents && <HeaderCart ref={headerCartRef} hideCart={hideCart} />}
				</div>
			</section>
		</header>
	);
}

"use client";

import { useState } from "react";
import "./accordion.css";

type AccordionProps = { title: string; children: React.ReactNode };

export default function Accordion({ title, children }: AccordionProps) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className={`accordion ${isOpen ? "open" : ""}`.trim()}>
			<div className="accordion__header">
				<button className="accordion__toggle" type="button" onClick={() => setIsOpen(!isOpen)}>
					<ChevronDown />
					{title}
				</button>
			</div>

			<div className="accordion__body">
				<div className="overflow-hidden">
					<div className="accordion__content" inert={!isOpen}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

function ChevronDown() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
			<path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
		</svg>
	);
}

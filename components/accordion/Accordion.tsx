"use client";

import { useState } from "react";
import "./accordion.css";
import Icon from "../icon/Icon";

type AccordionProps = { title: string; children: React.ReactNode };

export default function Accordion({ title, children }: AccordionProps) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className={`accordion ${isOpen ? "open" : ""}`.trim()}>
			<AccordionHeader onClick={() => setIsOpen(!isOpen)}>{title}</AccordionHeader>
			<AccordionBody inert={!isOpen}>{children}</AccordionBody>
		</div>
	);
}

type AccordionHeaderProps = { onClick: () => void; children: React.ReactNode };

function AccordionHeader({ onClick, children }: AccordionHeaderProps) {
	return (
		<div className="accordion__header">
			<button className="accordion__toggle" type="button" onClick={onClick}>
				<Icon variant="chevronDown" />
				{children}
			</button>
		</div>
	);
}

type AccordionBodyProps = { children: React.ReactNode; inert: boolean };

function AccordionBody({ children, inert }: AccordionBodyProps) {
	return (
		<div className="accordion__body">
			<div className="overflow-hidden">
				<div className="accordion__content" inert={inert}>
					{children}
				</div>
			</div>
		</div>
	);
}

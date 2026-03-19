import "./accordion.css";

export default function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="accordion">
			<div className="accordion__header">{title}</div>
			<div className="accordion__body">{children}</div>
		</div>
	);
}

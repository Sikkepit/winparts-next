import Image from "next/image";

export default function HeaderUsps() {
	return (
		<div className="header__usps">
			<Usp src="/return.png" alt="retour icoon">
				<span className="header__orange-txt">30 dagen</span> gratis ruilen
			</Usp>

			<Usp src="/safe.png" alt="slot icoon">
				<span className="header__orange-txt">Veilig</span> bestellen en betalen
			</Usp>

			<Usp src="/fast.png" alt="stopwatch icoon">
				<span className="header__orange-txt">Snelle</span> levering
			</Usp>

			<Usp src="/helpdesk.png" alt="helpdesk icoon">
				<span className="header__orange-txt">Deskundige</span> helpdesk
			</Usp>
		</div>
	);
}

function Usp({ src, alt, children }: { src: string; alt: string; children: React.ReactNode }) {
	return (
		<span className="flex items-center gap-2">
			<Image src={src} alt={alt} width={16} height={16} />
			<span>{children}</span>
		</span>
	);
}

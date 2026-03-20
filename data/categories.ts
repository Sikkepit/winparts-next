import { CategoryType } from "@/types/types";

const ruitenwissers: CategoryType = {
	id: 469,
	title: "Ruitenwissers",
	intro: `Versleten ruitenwissers piepen of laten strepen achter op uw raam. Daarnaast verwijderen
					versleten ruitenwissers het water niet goed van uw ruit, waardoor u geen goed zicht
					heeft als het regent. Wacht niet te lang met de ruitenwissers vervangen. Bij Winparts
					bestelt u Bosch ruitenwissers, maar ook ruitenwissers van Valeo en SWF. Vul uw kenteken
					in om gemakkelijk passende ruitenwissers voor uw auto te vinden.`,
	filters: [
		{ id: "brand", title: "Merk", opties: ["Bosch", "Valeo", "Blue Print"] },
		{ id: "details/inbouwplaats", title: "Inbouwplaats", opties: ["Voorzijde", "Achterzijde"] },
		{ id: "details/aantal", title: "Aantal", opties: ["1", "2", "Set", "Voordeelset"] },
		{ id: "details/typeruitenwisser", title: "Type ruitenwisser", opties: ["Flatblade", "Traditioneel"] },
		{
			id: "details/monteerwijze",
			title: "Monteerwijze",
			opties: ["Haakbevestiging", "Universeel", "Klikbevestiging"],
		},
	],
};

const olie: CategoryType = {
	id: 734,
	title: "Motorolie",
	intro: `Motorolie smeert en koelt het motorblok, zodat uw motor goed en efficiënt kan draaien en minder slijt. Daarnaast weekt 
	motorolie vuil- en roestafzettingen los. Dit vervuilt de motorolie, waardoor het haar smerende werking verliest. Daarom moet 
	motorolie regelmatig worden bijgevuld en vervangen. Bestel uw motorolie voordelig bij Winparts. Vul uw kenteken in om de 
	juiste motorolie voor uw auto te vinden en bestel gemakkelijk en snel motorolie van topmerken, zoals Liqui Moly, Castrol, 
	Eurol, of ons eigen merk, Winparts GO!`,
	filters: [
		{
			id: "brand",
			title: "Merk",
			opties: [
				"Castrol oil",
				"KroonOil",
				"Winparts GO!",
				"Champion Lubricants",
				"Liqui Moly",
				"Shell",
				"Eurol",
				"Kroon Oil Classic",
			],
		},
		{ id: "details/inhoud", title: "Inhoud", opties: ["1 liter", "4 liter", "5 liter"] },
		{
			id: "details/toepassing",
			title: "Viscositeit",
			opties: ["5W30", "5W40", "10W40", "0W20", "0W30"],
		},
		{
			id: "details/olie",
			title: "Olie samenstelling",
			opties: ["Synthetische olie", "Volsynthetisch", "Volledig synthetisch", "Mineraal olie"],
		},
	],
};

const accu: CategoryType = {
	id: 52,
	title: "Accu",
	intro: `De accu levert stroom voor het starten en alle elektrische apparaten van de auto, zoals de lampen, radio, 
	verwarming en meer. Tijdens het rijden laadt de accu zichzelf op. Als een accu tussen de 3 en 5 jaar oud is, houdt
	 die minder goed energie vast. Vooral in de winter, kan het dan voorkomen dat de accu te weinig stroom heeft om uw 
	 auto te starten. Is uw accu aan vervanging toe? Bestel bij Winparts voordelig een accu van Bosch, Varta Yuasa of 
	 Exide. Wilt u een goede én goedkope accu? Ga dan voor ons eigen merk, Winparts GO!`,
	filters: [
		{
			id: "brand",
			title: "Merk",
			opties: ["Bosch", "Varta"],
		},
		{
			id: "details/startstop",
			title: "Start-stop",
			opties: [
				"Niet geschikt voor start-stopsystemen",
				"Geschikt voor start-stop systemen",
				"Voor voertuigen met start/stop",
			],
		},
		{
			id: "details/batterijvermogenah",
			title: "Capaciteit AH",
			opties: [
				"40",
				"44",
				"45",
				"52",
				"54",
				"60",
				"61",
				"63",
				"65",
				"70",
				"72",
				"74",
				"77",
				"80",
				"85",
				"95",
				"100",
				"110",
			],
		},
	],
};

export const categories = [ruitenwissers, olie, accu];

export const getCategoryDetails = (id: number) => {
	return categories.find((c) => c.id === id);
};

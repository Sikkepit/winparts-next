import { CategoryType } from "@/types/types";

const ruitenwissers: CategoryType = {
	id: 469,
	title: "ruitenwissers",
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

export const categories = [ruitenwissers];

export const getCategoryDetails = (id: number) => {
	return categories.find((c) => c.id === id);
};

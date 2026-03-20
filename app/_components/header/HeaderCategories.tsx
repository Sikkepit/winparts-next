import Link from "next/link";

export default function HeaderCategories() {
	return (
		<ul className="header__categories">
			<li>
				<Link href={""}>Olie</Link>
			</li>

			<li>
				<Link href={""}>Ruitenwissers</Link>
			</li>

			<li>
				<Link href={""}>Accu</Link>
			</li>
		</ul>
	);
}

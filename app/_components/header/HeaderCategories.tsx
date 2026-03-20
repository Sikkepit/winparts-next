import Link from "next/link";

export default function HeaderCategories() {
	return (
		<ul className="header__categories">
			<li>
				<Link href={"/category/734"}>Olie</Link>
			</li>

			<li>
				<Link href={"/category/469"}>Ruitenwissers</Link>
			</li>

			<li>
				<Link href={"/category/52"}>Accu</Link>
			</li>
		</ul>
	);
}

import Link from "next/link";

export default function HeaderCategories() {
	return (
		<ul className="header__categories">
			<Category href="/category/734" label="Olie" />
			<Category href="/category/469" label="Ruitenwissers" />
			<Category href="/category/52" label="Accu" />
		</ul>
	);
}

function Category({ href, label }: { href: string; label: string }) {
	return (
		<li>
			<Link href={href}>{label}</Link>
		</li>
	);
}

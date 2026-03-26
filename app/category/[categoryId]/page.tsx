import Footer from "@/app/_components/footer/Footer";
import Header from "@/app/_components/header/Header";
import Overview from "@/app/_components/overview/Overview";

export default async function CategoryOverviewPage({ params }: { params: Promise<{ categoryId: string }> }) {
	const categoryId = (await params).categoryId;

	return (
		<>
			<Header />
			<main className="main">
				<Overview categoryId={parseInt(categoryId)} />
			</main>
			<Footer />
		</>
	);
}

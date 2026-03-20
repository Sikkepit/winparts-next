import Footer from "@/app/_components/footer/Footer";
import Header from "@/app/_components/header/Header";
import SearchOverview from "@/app/_components/search/SearchOverview";
import { searchCategory } from "@/data/categories";

export default async function SearchOverviewPage({ params }: { params: Promise<{ query: string }> }) {
	const query = (await params).query;

	return (
		<>
			<Header />
			<main className="main">
				<SearchOverview category={searchCategory} searchQuery={query} />
			</main>
			<Footer />
		</>
	);
}

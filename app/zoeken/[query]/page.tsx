import SearchOverview from "@/app/_components/search/SearchOverview";
import { searchCategory } from "@/data/categories";

export default async function SearchOverviewPage({ params }: { params: Promise<{ query: string }> }) {
	const query = (await params).query;

	return <SearchOverview category={searchCategory} searchQuery={query} />;
}

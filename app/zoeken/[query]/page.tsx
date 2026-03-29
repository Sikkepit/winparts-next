import SearchOverview from "@/app/_components/search/SearchOverview";
import { searchCategory } from "@/data/categories";

type SearchOverviewPageProps = {
	params: Promise<{ query: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchOverviewPage({ params, searchParams }: SearchOverviewPageProps) {
	const query = (await params).query;
	const searchPms = await searchParams;

	return <SearchOverview category={searchCategory} searchQuery={query} searchParams={searchPms} />;
}

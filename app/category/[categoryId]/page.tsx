import Overview from "@/app/_components/overview/Overview";

interface CategoryOverviewPageProps {
	params: Promise<{ categoryId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CategoryOverviewPage({ params, searchParams }: CategoryOverviewPageProps) {
	const categoryId = (await params).categoryId;
	const searchPms = await searchParams;

	return <Overview categoryId={parseInt(categoryId)} searchParams={searchPms} />;
}

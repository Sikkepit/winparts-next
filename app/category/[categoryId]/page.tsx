import Overview from "@/app/_components/overview/Overview";

export default async function CategoryOverviewPage({ params }: { params: Promise<{ categoryId: string }> }) {
	const categoryId = (await params).categoryId;

	return <Overview categoryId={parseInt(categoryId)} />;
}

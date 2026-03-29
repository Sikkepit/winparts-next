import Overview from "./_components/overview/Overview";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const searchPms = await searchParams;

	return <Overview searchParams={searchPms} />;
}

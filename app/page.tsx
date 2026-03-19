import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import OverviewFilters from "./_components/overview/filters/OverviewFilters";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main">
				<section className="grid grid-cols-12">
					<div className="col-span-3">
						<OverviewFilters />
					</div>
					<div className="col-span-9">Main</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

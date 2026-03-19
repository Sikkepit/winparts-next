import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main">
				<section className="grid grid-cols-12">
					<div className="col-span-3">Filters</div>
					<div className="col-span-9">Main</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

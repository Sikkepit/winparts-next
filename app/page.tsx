import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Overview from "./_components/overview/Overview";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main">
				<Overview />
			</main>
			<Footer />
		</>
	);
}

import NavHeader from "@/component/NavHeader";
import Footer from "@/component/Footer";
import MainContainer from "@/component/MainContainer";

export default function Home() {
	return (
		<div className="flex flex-col w-full h-screen">
			<NavHeader />

			<MainContainer />

			<Footer />
		</div>
	);
}

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CompaniesSection from "./sections/CompaniesSection";
import ElectricBorderSection from "./sections/ElectricBorderSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import LogoSection from "./sections/LogoSection";
import SkillsSection from "./sections/SkillsSection";

const App = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<CompaniesSection />
			<ExperienceSection />
			<SkillsSection />
			<ElectricBorderSection />
			<LogoSection />
			<Footer />
		</>
	);
};

export default App;

import NavBar from "./components/NavBar";
import CompaniesSection from "./sections/CompaniesSection";
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
			<LogoSection />
		</>
	);
};

export default App;

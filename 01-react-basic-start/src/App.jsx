import Header from "./components/Header";
import TeachingSection from "./components/TeachingSeaction";
import DifferencesSection from "./components/Differences";
import IntroSection from "./components/IntroSection";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  );
}

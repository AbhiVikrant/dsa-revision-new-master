import "./index.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ContentSection from "./components/ContentSection";
function App() {
  return (
    <>
      <div className=" flex flex-col bg-slate-100 min-h-screen px-3 py-5 gap-12">
        <Header />
        <IntroSection />
        <ContentSection />
      </div>
    </>
  );
}

export default App;

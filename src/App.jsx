import "./index.css";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
function App() {
  return (
    <>
      <div className=" flex flex-col bg-slate-100 min-h-screen px-3 py-5 gap-12">
        <Header />
        <IntroSection />
      </div>
    </>
  );
}

export default App;

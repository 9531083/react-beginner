import Header from "./components/Header/Header.jsx"; //import header
//import core concepts
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
//
import Examples from "./components/examples/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
export default App;

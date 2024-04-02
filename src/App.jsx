import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcept";
import TabButton from "./components/TabButton";
import "./index.css";

function App() {
  function handleSelect() {
    console.log("hello World!");
  }
  return (
    <div>
      <Header />
      <main id="core-concepts">
        <seciton>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, i) => {
              return (
                <CoreConcept
                  key={i}
                  title={concept.title}
                  descreption={concept.description}
                  img={concept.image}
                />
              );
            })}
          </ul>
        </seciton>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleSelect} label="Components" />
            <TabButton onClick={handleSelect} label="JSX" />
            <TabButton onClick={handleSelect} label="Props" />
            <TabButton onClick={handleSelect} label="States" />
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcept";

function App() {
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
      </main>
    </div>
  );
}

export default App;

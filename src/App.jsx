import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcept";
import TabButton from "./components/TabButton";
import "./index.css";
import { EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].descreption}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
            <TabButton
              onSelect={() => handleSelect("components")}
              label="Components"
            />
            <TabButton onSelect={() => handleSelect("jsx")} label="JSX" />
            <TabButton onSelect={() => handleSelect("props")} label="Props" />
            <TabButton onSelect={() => handleSelect("state")} label="States" />
          </menu>
          {/* {!selectedTopic && <p>Please Select a topic</p>} */}
          {/* {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].descreption}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;

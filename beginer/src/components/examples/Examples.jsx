import React, { useState } from "react";

import TapButton from "./TapButton.jsx";

import { EXAMPLES } from "./data.jsx";

import Section from "../Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  //
  let tabContent = <p>Please Click a Button!!!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <p className="code">{EXAMPLES[selectedTopic].code}</p>
        </pre>
      </div>
    );
  }
  return (
    <Section title={"Examples"} id="examples">
      {/* <h2>Example</h2> */}
      <Tabs
        // buttonTag="menu"
        buttons={
          <>
            <TapButton
              setStyle={selectedTopic === "components"}
              onClick={() => clickHandler("components")}
            >
              Components
            </TapButton>
            <TapButton
              setStyle={selectedTopic === "jsx"}
              onClick={() => clickHandler("jsx")}
            >
              JSX
            </TapButton>
            <TapButton
              setStyle={selectedTopic === "props"}
              onClick={() => clickHandler("props")}
            >
              Props
            </TapButton>
            <TapButton
              setStyle={selectedTopic === "state"}
              onClick={() => clickHandler("state")}
            >
              State
            </TapButton>
          </>
        }
      >
        {tabContent} {/*its worrking with if statment*/}
      </Tabs>
    </Section>
  );
}

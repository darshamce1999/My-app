import React, { useState } from 'react'

enum TabType {
    HTML = "HTML",
    CSS = "CSS",
    Javascript = "Javascript"
}

function Tabs() {
    const [state, setstate] = useState<TabType>(TabType.HTML)
    
  return <>
    <div onClick={(e) => {
        const temp = (e.target as HTMLButtonElement).innerText
        setstate(temp as any as TabType)
    }}>
        <button style={{backgroundColor: `${state == TabType.HTML ? "purple": ""}`}}>{TabType.HTML}</button>
        <button style={{backgroundColor: `${state == TabType.CSS ? "purple": ""}`}}>{TabType.CSS}</button>
        <button style={{backgroundColor: `${state == TabType.Javascript ? "purple": ""}`}}>{TabType.Javascript}</button>
    </div>
    {state == TabType.HTML && <div>The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.</div>}
    {state == TabType.CSS && <div>Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.</div>}
    {state == TabType.Javascript && <div> JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.</div>}
  </>
}

export default Tabs
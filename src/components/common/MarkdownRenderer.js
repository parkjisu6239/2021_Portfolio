import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer() {
  const file = require('./sample.md').default
  const [ markdown, setMarkdown ] = useState('')

  useEffect(() => {
    fetch(file)
    .then(response => response.text()).then((text) => {
      setMarkdown(text)
    })
  })

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  )
}

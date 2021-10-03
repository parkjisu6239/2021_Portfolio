import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import './MarkdownRenderer.css'

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
    <ReactMarkdown className="markdown" children={markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
  )
}

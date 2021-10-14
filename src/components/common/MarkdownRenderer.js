import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import './MarkdownRenderer.css'

export default function MarkdownRenderer({md}) {
  const [ markdown, setMarkdown ] = useState('')

  useEffect(() => {
    fetch(md)
    .then(response => response.text()).then((text) => {
      setMarkdown(text)
    })
  })

  return (
    <ReactMarkdown className="markdown" children={markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
  )
}

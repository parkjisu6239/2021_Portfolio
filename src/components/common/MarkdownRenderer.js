import ReactMarkdown from "react-markdown";

const markdown = `
# 제목

## 부제목1

이내용
저내용

\`\`\`
  코드블럭
\`\`\`


## 부제목2

*이탤릭*
**굵게**

- 리스트
- 리리스트

> 인용문

`

export default function MarkdownRenderer() {
    return (
        <ReactMarkdown>{markdown}</ReactMarkdown>
    )
}
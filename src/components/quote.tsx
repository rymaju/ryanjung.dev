import React from "react"

interface QuoteProps {
  title: string | React.ReactNode
  content: string | React.ReactNode
  source: string | React.ReactNode
}

const Quote: React.FC<QuoteProps> = ({ title, content, source }) => (
  <li>
    <b>{title}</b> {content} <i>{source}</i>
  </li>
)

export default Quote

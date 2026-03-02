import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PANEL_FONT } from './panelStyles.js'

interface MarkdownTextProps {
    text: string
    previewLength: number
    style?: React.CSSProperties
}

export function MarkdownText({ text, previewLength, style }: MarkdownTextProps) {
    const [expanded, setExpanded] = useState(false)
    const needsTruncation = text.length > previewLength

    const displayText = expanded || !needsTruncation ? text : text.slice(0, previewLength) + '…'

    return (
        <div style={style} className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{displayText}</ReactMarkdown>
            {needsTruncation && (
                <button
                    onClick={() => setExpanded((v) => !v)}
                    style={{
                        display: 'inline',
                        marginLeft: 4,
                        padding: '0 2px',
                        background: 'transparent',
                        border: 'none',
                        borderRadius: 0,
                        color: 'rgba(90, 140, 255, 0.85)',
                        fontSize: 'inherit',
                        fontFamily: PANEL_FONT,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    }}
                >
                    {expanded ? 'Show less' : 'Show more'}
                </button>
            )}
        </div>
    )
}

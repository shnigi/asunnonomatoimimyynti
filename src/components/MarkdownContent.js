
import React from 'react'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

const MarkdownContent = (content) => {
    content = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(content).toString();
    return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
)}

export default MarkdownContent
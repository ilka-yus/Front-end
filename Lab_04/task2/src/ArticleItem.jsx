import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <li style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ cursor: 'ponter', fontWeight: 'bold' }} onClick={() => setIsOpened(!isOpened)}>
                    {article.title}
                </span>
                <button onClick={() => onClickRemove(article.id)}>+</button>
            </header>

            {isOpened && <p>{article.summary}</p>}
        </li>
    );
};

export default ArticleItem;
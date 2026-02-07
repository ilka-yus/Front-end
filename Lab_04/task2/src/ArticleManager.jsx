import React, { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const ArticleManager = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'First Article', summary: 'This is a great read.' }
    ]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const onClickAdd = () => {
        if (!title || !summary) return;
        const newArticle = {
            id: Date.now(),
            title,
            summary
        };
        setArticles([...articles, newArticle]);
        setTitle('');
        setSummary('');
    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(a => a.id !== id));
    };

    return (
        <div style={{ pudding: '20px' }}>
            <h1>Article Manager</h1>
            <AddArticle
                name="Create New Article"
                title={title}
                summary={summary}
                onChangeTitle={setTitle}
                onChangeSummary={setSummary}
                onClickAdd={onClickAdd}
            />

            <hr />

            <ArticleList
                articles={articles}
                onClickRemove={onClickRemove}
            />
        </div>
    );
};

export default ArticleManager;
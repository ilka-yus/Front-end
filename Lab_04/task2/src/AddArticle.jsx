import React from 'react';

const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onClicked }) => (
    <section>
        <h3>{name}</h3>
        <input
            placeholder='Title'
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
        />
        <input
            placeholder='Summary'
            value={summary}
            onChange={(e) => onChangeSummary(e.target.value)}
        />
        <button onClick={onClickAdd}>Add</button>
    </section>
);

export default AddArticle;
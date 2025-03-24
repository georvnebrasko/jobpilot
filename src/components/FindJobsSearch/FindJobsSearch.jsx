import React from 'react';
import './FindJobsSearch.scss';

function FindJobsSearch({
  keyword,
  setKeyword,
  location,
  setLocation,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="findJobsSearch">
      <input
        type="text"
        className="findJobsSearch__keywords"
        placeholder="Я ищу вакансию (ключевые слова)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="text"
        className="findJobsSearch__location"
        placeholder="Место"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        className="findJobsSearch__category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Все категории</option>
        <option value="design">Дизайн</option>
        <option value="it">IT</option>
        <option value="marketing">Маркетинг</option>
      </select>
      <button className="findJobsSearch__button">Найти работу</button>
    </div>
  );
}

export default FindJobsSearch;
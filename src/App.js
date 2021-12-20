import React, { useState } from 'react';
import Hike from './Hike';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [hikeItems, setHikeItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setHikeItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setHikeItems(newItems);
  };

  return (
    <main>
  <section className="menu section">
  <div className="title">
  <br/>
  <br/>
  <h2>Yosemite most popular hikes</h2>
  <div className="underline"></div>
</div>
<Categories categories={categories} filterItems={filterItems}/>
<Hike items = {hikeItems} />
</section>
  </main>
);
}

export default App;

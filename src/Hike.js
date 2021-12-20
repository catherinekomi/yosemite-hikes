import React from 'react';

const Hike = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((hikeItem) => {
        const {id, title, img, desc, about } = hikeItem;
         return (
      <article key={id} className='content-item'>
      <img src={img} alt= {title} className='photo'/>
      <br/>
      <div className="item-info">
      <header>
      <h4>{title}</h4>
      <h4 className ="about">{about}</h4>
      </header>
      <p className="item-text">{desc}</p>
</div>
      </article>
    );
  })}
  </div>
);
};

export default Hike;

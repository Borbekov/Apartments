import React, { useEffect, useState } from 'react';
import '../styles/card.scss';

const Like = ({ card, chosen, setChosen }) => {
  const pressLike = () => {
    setChosen(oldArray => (
      oldArray.includes(card.id) ? (
        oldArray.filter(item => item !== card.id)
      ) : (
        [...oldArray, card.id]
      )
    ))
  }
  if (chosen.includes(card.id)) {
    return (
      <div className="heart" onClick={pressLike}>
        <i className="ri-heart-fill"></i>
      </div>
    )
  } else {
    return (
      <div className="heart" onClick={pressLike}>
        <i className="ri-heart-line"></i>
      </div>
    )
  }
}

const Card = ({ cards, chosen, setChosen }) => {
  return (
    <div>
      {cards.map(card => (
        <div className="card" key={card.id}>
          <div className="mobile_descr_header">
            <div className="top">
              <p className="price">{card.attributes.price} руб.</p>
            </div>
            <p className="title">
              {`${card.attributes.title}, ${card.attributes.area} ${card.attributes.unit}, ${card.attributes.stage}/${card.attributes.totalStage} этаж`}
            </p>
          </div>

          <div className="tablet_descr_header">
            <p className="title">
              {`${card.attributes.title}, ${card.attributes.area} ${card.attributes.unit}, ${card.attributes.stage}/${card.attributes.totalStage} этаж`}
            </p>
            <p className="price">{card.attributes.price} руб.</p>
          </div>

          <div className="card_inc">
            <div className="card_img">
              <img src={card.images[0].url} alt="img" />
              <span>{card.images.length}</span>
            </div>
            <div className="card_descr">
              <div className="descr_header">
                <p className="title">
                  {`${card.attributes.title}, ${card.attributes.area} ${card.attributes.unit}, ${card.attributes.stage}/${card.attributes.totalStage} этаж`}
                </p>
                <p className="price">{card.attributes.price} руб.</p>
              </div>
              <div className="descr_body">
                <div className="address">
                  {`${card.attributes.address.street} ${card.attributes.address.house}`}
                </div>
                <div className="description">
                  {card.attributes.description}
                </div>
              </div>
              <div className="descr_footer">
                <div className="owner_info">
                  <span className={`owner_type ${card.relationships.type === 'owner' ? 'owner' : ''}`}>
                    {card.relationships.type === 'agent' ? 'Специалист' : 'Хозяин'}
                  </span>
                  <span className="owner_name">
                    {card.relationships.type === 'agent' && `${card.relationships.attributes.first_name} ${card.relationships.attributes.last_name}`}
                  </span>
                </div>
                <div className="city">
                  <span>{card.attributes.address.city}</span>
                  <Like card={card} chosen={chosen} setChosen={setChosen} />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile_descr_footer">
            <div className="owner_info">
              <span className={`owner_type ${card.relationships.type === 'owner' ? 'owner' : ''}`}>
                {card.relationships.type === 'agent' ? 'Специалист' : 'Хозяин'}
              </span>
              <Like card={card} chosen={chosen} setChosen={setChosen} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
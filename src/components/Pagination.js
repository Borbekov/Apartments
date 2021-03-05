import React, { useEffect, useState } from 'react';
import '../styles/pagination.scss';

const Pagination = ({ length, navigation, setNavigations }) => {

  const prevPage = () => {
    if (navigation.from > 1) {
      setNavigations({from: navigation.from - 5, to: navigation.to - 5})
    }
  }

  const nextPage = () => {
    if (navigation.to < length) {
      setNavigations({from: navigation.from + 5, to: navigation.to + 5})
    }
  }

  if (length > 2) {
    return (
      <div className="pagination">
        <i className="ri-arrow-left-s-line" onClick={prevPage}></i>
        <span>{`${navigation.from + 1}-${navigation.to > length ? length : navigation.to} из ${length}`}</span>
        <i className="ri-arrow-right-s-line" onClick={nextPage}></i>
      </div>
    );
  } else {
    return null
  }
};

export default Pagination;
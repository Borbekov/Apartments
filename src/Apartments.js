import React, { useState, useEffect } from 'react';
import Card from './components/Card.js'
import Pagination from './components/Pagination.js'

const Apartments = () => {

  const [navigation, setNavigations] = useState({from: 0, to: 5})
  const [pageContent, setPageContent] = useState([])
  const [apartments, setApartments] = useState([])
  const [chosen, setChosen] = useState([])

  useEffect(async () => {
    let url = 'http://localhost:3001/apartments'
    let response = await fetch(url)
    let json = await response.json()
    setTimeout(() => {
      setApartments(json)
    }, 2000);
  }, []);

  useEffect(() => {
    let content = apartments.slice(navigation.from, navigation.to)
    setPageContent(content)
  }, [apartments]);

  useEffect(() => {
    let content = apartments.slice(navigation.from, navigation.to)
    setPageContent(content)
  }, [navigation]);

  useEffect(() => {
    console.log("Вам понравились: ", chosen);
  }, [chosen]);
  
  if (pageContent.length) {
    return (
      <div className="container">
        <Card cards={pageContent} chosen={chosen} setChosen={setChosen} />
        <Pagination length={apartments.length} navigation={navigation} setNavigations={setNavigations} />
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <i className="ri-loader-2-line"></i>
      </div>
    )
  }
};

export default Apartments;
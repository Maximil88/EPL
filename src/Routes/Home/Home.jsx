import React from 'react';
import './Style.css';
import pll from '../../components/logo/pll.jpeg';


export default function Home() {
  return (
    <div>
      <h1>EPL team search by year 2020-2021</h1>
      <img src={pll} alt="premeir league logo"/>
    </div>
  )
}

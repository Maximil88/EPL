import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../../Routes/Home/Home';
import Team from '../../Routes/Team/Team';
import Teams from '../../Routes/Teams/Teams';
import './style.css'

export default function main() {
  return (
    <div className='main'>
        <Routes>
      <Route path="/" element={<Home />} />
        <Route path="Teams" element={<Outlet />}>
          <Route index element={<Teams />} />
          <Route path=":id/*" element={<Team />} />
        </Route>
      </Routes>
    </div>
  )
}

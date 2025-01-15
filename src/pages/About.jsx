import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about'>
      <h2>Messages v1.0.0</h2>
      <p>Üzenet küldő alkalmazás Vite keretrendszer és Firebase használatával.</p>
        <ul>
          <li><Link to="/">Message:</Link> Itt láthatóak a küldött/fogadott üzenetek. </li>
          <li><Link to="/users">Users:</Link> Itt láthatóak a küldött/fogadott üzenetek. </li>
          <li><Link to="/about">About:</Link> Alkalmazás leírása. </li>
          <li><Link to="/login">Login:</Link> Bejelentkezés az alkalmazásba.</li>
        </ul>
      
    </div>
  )
}

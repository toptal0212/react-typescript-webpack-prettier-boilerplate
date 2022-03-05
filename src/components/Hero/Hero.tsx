import React, { ReactElement } from 'react'
import "./Hero.scss";

const Header = ():ReactElement => {
  return (
    <div className="headerWrapper">
      <h2 className="headerMessage">
        React+Typescript+Sass Starter Kit with Webpack+Prettier+Eslint
      </h2>
      <div className="headerLoader">
      </div>  
    </div>
  )
}

export default Header
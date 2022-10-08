import React from 'react'
import { WelcomeProps } from '../type';

const Header = ({name}: WelcomeProps)  => {
  return (
    <>
       <h1>{name}</h1>
    </>
  )
}

export default Header;
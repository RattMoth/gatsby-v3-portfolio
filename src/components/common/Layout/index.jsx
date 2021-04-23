import React, { useContext } from 'react';
import { Footer } from '../../theme/Footer';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};

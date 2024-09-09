import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/layout/layout';
import Nav from './components/layout/nav/nav';
import Header from './components/header/header';
// import "bootstrap/dist/css/bootstrap.min.css";
import BasicButtonExample from './components/header/boot';

function App() {

  return (
    <>
      <Layout>
        <Nav/>
        <Header />
      </Layout>
        
    </>
  );
}

export default App

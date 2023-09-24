import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import homePage from './pages/home/page'
import projectsPage from './pages/projects/page'
import projectPage from "./pages/projectInfo/page"

import CBLogo from '@resources/CBLogo.png'

import { SelectPageButton, getHeader } from './header';

const pages = {
  home: homePage,
  projects: projectsPage,
  project: projectPage
}

const defaultHeaders: SelectPageButton[] = [
  {pageRef: pages.home, pageName: "Home", selected: true},
  {pageRef: pages.projects, pageName: "Projects", selected: false}
]

function App() {
  const [displayedPage, setDisplayedPage] = useState(pages.project);
  return (
    <>
      {getHeader(defaultHeaders, page => {
        defaultHeaders.forEach(e => e.selected = false);
        let btn = defaultHeaders.find(e => e.pageRef == page);
        if (btn != undefined) btn.selected = true
        setDisplayedPage(page);
      })}
      <div className='content-container'>
        {displayedPage}
      </div>
    </>
  );
}

export default App;

import React from 'react';
import TestComponent from './Components/TestComponent'
import NovelBlogComponent from './Components/NovelBlogComponent';
import ArrayComponent from './Components/ArrayComponent';
import CounterComponent from './Components/CounterComponent';

function App() {
  const novel = {
    title : "harry potter",
    author : "J.K Rowling",
    description : "Be Happy and Learn",
    type : "Fantasy"
  }
  
  return ( 
    <>
      <TestComponent  />  
      <NovelBlogComponent title={novel.title} author={novel.author}
       description={novel.description} type={novel.type} /> 
      <ArrayComponent />
      <CounterComponent/>
    </>  
  );
} 

export default App; 
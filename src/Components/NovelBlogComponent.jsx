import React , { Component } from 'react'
import AutherComponent from './AutherComponent'
import TitleComponent from './TitleComponent'
import DescriptionComponent from './DescriptionComponent'
import TypeComponent from './TypeComponent'

function NovelBlogComponent({title,author,description,type}) {
    return (
        <div className='novel-post'>
            <TitleComponent title={title}/>
            <AutherComponent author={author}/>
            <DescriptionComponent description={description}/>
            <TypeComponent type={type}/>
        </div> 
    );

}

export default NovelBlogComponent
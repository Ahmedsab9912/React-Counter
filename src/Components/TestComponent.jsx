import React , { Component } from 'react'

class TestComponent extends React.Component {
constructor(){
    super();
    this.state = {
        likes :0,
        dislikes:0,
        // Now we are handing the States
        handelLikes : () => {
            this.setState ((prevState) => ({
                likes : prevState.likes + 1
            }));
        },
        handelDisLikes : () => {
            this.setState ((prevState) => ({
                dislikes: prevState.dislikes + 1
            }));
        }
    }
}

render () {
    return(
        <>
        <h1 style={{color:"red", fontSize:"50px", fontWeight:"bold", textAlign:"center"}} >This is my Counter 👌</h1> 
        <button onClick={this.state.handelLikes} >
            Likes 👍 ({this.state.likes})
        </button>
        <button onClick={this.state.handelDisLikes}> 
            Dislikes 👎 ({this.state.dislikes})
        </button>
        </>
    )
}
 
}
export default TestComponent
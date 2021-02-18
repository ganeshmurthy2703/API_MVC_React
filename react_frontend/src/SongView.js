import { data } from 'jquery';
import React, { Component } from 'react'; 



class SongView extends React.Component{
    state ={
        lyric:""
    }
    getData(){
        fetch(`http://localhost:5000/${this.props.baseUrl}/${this.props.songKey}`)
        .then(res => res.text())
        .then(data =>
        {
            console.log(data)
            this.setState({
                lyric:data
            })
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.songKey!==prevProps.songKey){
        this.getData();
    }
    }
    componentDidMount(){
        this.getData();
    }
    
    render(){
        return(
        <div>
            <p>{this.props.songKey}</p>
            <img src={"/images/"+this.props.songKey+".jpg"} width="1200" height="650" />
            <div dangerouslySetInnerHTML={{__html: this.state.lyric}}></div>

        </div>
        )}
}

export default SongView


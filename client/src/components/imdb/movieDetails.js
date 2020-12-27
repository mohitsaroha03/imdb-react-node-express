import React from 'react';
import unsplash from '../../api/unsplash';
import bg from '../../assets/images/bg.png'
import '../../assets/css/main.css';


class Moviedetails extends React.Component {
    state={
        list:[]
    }
    fetchData=()=>{
        unsplash.get(`/imdb/movies/${this.props.match.params.id}`
        ).then(res=>{
            console.log(res);
            this.setState({list:res.data.data})
        })
    }
    componentDidMount(){
      this.fetchData();
    }
    render(){
        const {list}=this.state;
        return(<>
    <div className="ui card details">
    <div className="image dimmable dimmed">
      <img src={bg}/>
    </div>
    <div className="content">
        <div className="header">{list.title}</div>
          <div className="meta">
            <a className="group"><b>Director: </b>{list.director}</a>
          </div>
          <div className="description"><b>Release: </b>{list.date_of_release}</div>
    </div> 
    
  </div>
        </>)
    }
}

export default Moviedetails;
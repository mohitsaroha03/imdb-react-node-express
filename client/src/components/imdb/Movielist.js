import React from 'react';
import unsplash from '../../api/unsplash';
import '../../assets/css/main.css';

class Movielist extends React.Component {
    state={
        list:[],
        getId:0
    }
    fetchData=()=>{
        unsplash.get('/imdb/movies',{
            params:{
                format:'json',
                limit:100,
                offset:0
            }
        }).then(res=>{
                this.setState({
                    list:res.data.data,
                })
        })
    }
    componentDidMount(){
      this.fetchData();
    }
    catchId=(id)=>{
        return this.props.history.push(`moviedetails/${id}`);
    }
render(){
    if(!this.state.list || !this.state.list.length ){
        return <div>Loading......</div>
    }
    return(
       <>
       <div className="container">
         <div className="ui four cards" style={{margin:'2em'}}>
              {
                  this.state.list.map((data)=>{
                      return(
                          <div className="card" key={data.id} onClick={()=>this.catchId(data.id)}>
                             <div className="content">
                                 <div className="header">{data.title}</div>
                                   <div className="meta">
                                     <a className="group"><b>Director: </b>{data.director}</a>
                                    </div>
                                    <div className="description"><b>Release: </b>{data.date_of_release}</div>
                              </div>   
                          </div>
                      )
                  })
              }
         </div>
       </div>
       </>
    )
}
}

export default Movielist
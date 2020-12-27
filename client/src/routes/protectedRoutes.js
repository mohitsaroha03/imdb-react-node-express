import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom';
import Auth from '../components/auth/auth';

export const ProtectedRoute=({component:Component,...rest})=>{
    return(
        <Route {...rest}
         render={
             (props)=>{
                 if(localStorage.getItem('authProtection') == 'true'){
                     return  <Component {...props}/>
                     }
                 else{
                  return <Redirect to={
                         {
                             pathname:'/',
                             state:{
                                 from:props.location
                             }
                         }
                     }
                      />
                    
                 }
             }
         }  
        />
    )
}
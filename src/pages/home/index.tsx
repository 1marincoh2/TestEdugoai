import React, {useState, useEffect} from 'react';
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow} from '@material-ui/core';

function Home() {
  const Datepersons=[
    {id:1, name:'jose',lastname:'marin',age:28,},
    {id:2, name:'amir',lastname:'marin',age:25,},
    {id:3, name:'alina',lastname:'marin',age:18,},
    {id:4, name:'mildred',lastname:'marin',age:20,},
    {id:4, name:'beatriz',lastname:'canul',age:26,},
   ]

   const [Date,setDate]=useState(Datepersons);
  
    
   const [persons, setPersons]=useState({
     id:'',
     name:'',
     lastname:'',
     age:0,
    }); 
    return <h2>Home hola</h2>
    ;
    
  }

  export default Home
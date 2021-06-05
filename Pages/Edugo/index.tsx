import React, {useState, useEffect} from 'react';
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow} from '@material-ui/core';


const Index = () => {
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
 

  return (
    
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
       <TableCell>Nombre</TableCell> 
       <TableCell>Apellidos</TableCell> 
       <TableCell>Edad</TableCell> 
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {Date.map(datos=>(
             <TableRow key={datos.id}>
          <TableCell>{datos.name}</TableCell>
          <TableCell>{datos.lastname}</TableCell>
          <TableCell>{datos.age}</TableCell>
          </TableRow>
          ))}
      
      </TableBody>
    </Table>   
   </TableContainer>
  
       
  );
}

export default Index

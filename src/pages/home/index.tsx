import React, { useState, useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
   Typography, 
   Modal} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({

  Modal: {
    position: 'absolute',
    width: 400,
    border: '2px solid #000',
    top: '50%',
    left: '50%',
    transform: 'Translate(-50%,-50%)'
  },
  iconos: {
    cursor: 'pointer'
  },

  inputMaterial: {
    width: '100%'
  }
}));

function Home() {

  const style = useStyles();

  const Datepersons = [
    { id: 1, name: 'jose', lastname: 'marin', age: 28, },
    { id: 2, name: 'amir', lastname: 'marin', age: 25, },
    { id: 3, name: 'alina', lastname: 'marin', age: 18, },
    { id: 4, name: 'mildred', lastname: 'marin', age: 20, },
    { id: 4, name: 'beatriz', lastname: 'canul', age: 26, },
  ]

  const [Date, setDate] = useState(Datepersons);
  const [Insertar, setInsertar]=useState(false);
  const [Editar, setEditar] = useState(false);
    const [Eliminar, setEliminar] = useState(false);

  const [persons, setPersons] = useState({
    id: 0,
    name:'',
    lastname: '',
    age:0,
  });

  const person=(elemento:any, caso: any)=>{
   setPersons(elemento);
    (caso === 'Editar')?setEditar(true):setEliminar(true)
  };


  const handleChange=(e:any)=>{
 const {name,value} =e.target;
 setPersons((prevState)=>({
   ...prevState,
    [name]: value
 }))
      console.log(persons);
  }

  const editar =()=>{
   const NuevaDate=Date;
   NuevaDate.map(Datepersons=>{
       if (Datepersons.id===persons.id){
           Datepersons.name=persons.name;
               Datepersons.lastname=persons.lastname;
               // @ts-ignore
           Datepersons.age=persons.age;
       }
   })
      setDate(NuevaDate);
      setEditar(false);
  }
  const eliminar=()=>{
      setDate(Date.filter(data=>data.id!==persons.id));
      setEliminar(false);
  }
   const OpenInsertat= ()=>{
      // @ts-ignore
       setPersons(null);
      setInsertar(true);
   }

   const insertar=()=>{

      const agregardata=persons;
      agregardata.id=Date[Date.length-1].id+1;
      const newDate=Date;
      newDate.push(agregardata);
      setDate(newDate);
      setInsertar(false);
   }


  return (
      <div>

    <br />
    <Button variant="contained"  color="primary" onClick={OpenInsertat} >
      Agregar
      </Button>
      <Dialog aria-labelledby='customized-dialog-title' open={Insertar}>
        <DialogTitle id='customized-dialog-title'>
          Agregando Datos </DialogTitle>
        <DialogContent dividers>
  

              <TextField
                variant='outlined'
                name='name'
                label='Nombre'
                value={persons ? persons.name:''}
                fullWidth
                style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
                onChange={handleChange}
              />


              <TextField
                variant='outlined'
                name='lastname'
                label='Apellidos'
                fullWidth
                value={persons ? persons.lastname:''}
                style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
                onChange={handleChange}
              />
              <TextField
                variant='outlined'
                name='age'
                label='Edad'
                fullWidth
                value={persons ? persons.age:''}
                style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
                onChange={handleChange}
              />

              <DialogActions>
              <Button

                size='large'
                type='submit'
                style={{ marginTop: '15px' }}
                variant='contained'
                color='primary'
                onClick={()=>insertar()}
              >
                Insertar


              </Button>
                <Button

                    size='large'
                    type='submit'
                    style={{ marginTop: '15px' }}
                    variant='contained'
                    color='primary'
                    onClick={()=>setInsertar(false)}

                >
                  Cancelar


                </Button>
              </DialogActions>

        </DialogContent>

      </Dialog>

    <br />
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nombre
            </TableCell>
            <TableCell>
              Apellidos
            </TableCell>
            <TableCell>
              Edad
            </TableCell>
            <TableCell>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Date.map(elemento => (
            <TableRow key={elemento.id}>
              <TableCell>
                {elemento.name}
              </TableCell>
              <TableCell>
                {elemento.lastname}
              </TableCell>
              <TableCell>
                {elemento.age}
              </TableCell>
              <TableCell>
              <Button variant="contained" color="primary" onClick={()=>person(elemento, 'Editar')}>
      Editar
      </Button>
              <Button variant="contained" color="secondary"  onClick={()=>person(elemento, 'Eliminar')}>
      eliminar
      </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>

          <Dialog aria-labelledby='customized-dialog-title' open={Editar}>
              <DialogTitle id='customized-dialog-title'>
                  Agregando Datos </DialogTitle>
              <DialogContent dividers>


                  <TextField
                      variant='outlined'
                      name='name'
                      label='Nombre'
                      value={persons && persons.name}
                      fullWidth
                      style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
                      onChange={handleChange}
                  />


                  <TextField
                      variant='outlined'
                      name='lastname'
                      label='Apellidos'
                      fullWidth
                      value={persons && persons.lastname}
                      style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
                      onChange={handleChange}
                  />
                  <TextField
                      variant='outlined'
                      name='age'
                      label='Edad'
                      fullWidth
                      value={persons && persons.age}
                      style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
                      onChange={handleChange}
                  />

                  <DialogActions>
                      <Button

                          size='large'
                          type='submit'
                          style={{ marginTop: '15px' }}
                          variant='contained'
                          color='primary'
                          onClick={()=>editar()}
                      >
                          actualizar


                      </Button>
                      <Button

                          size='large'
                          type='submit'
                          style={{ marginTop: '15px' }}
                          variant='contained'
                          color='primary'
                          onClick={()=>setEditar(false)}

                      >
                          Cancelar


                      </Button>
                  </DialogActions>

              </DialogContent>

          </Dialog>

          <Dialog  aria-labelledby='customized-dialog-title' open={Eliminar}>

              <DialogContent dividers>

                  <DialogTitle id='customized-dialog-title'>
                      Esta seguro que desae Eliminar esta informacion <br/><h2>{persons && persons.name}</h2> </DialogTitle>
                  <DialogActions>
                      <Button

                          size='large'
                          type='submit'
                          style={{ marginTop: '15px' }}
                          variant='contained'
                          color='primary'
                          onClick={()=>eliminar()}
                      >
                          si


                      </Button>
                      <Button

                          size='large'
                          type='submit'
                          style={{ marginTop: '15px' }}
                          variant='contained'
                          color='primary'
                          onClick={()=>setEliminar(false)}

                      >
                          no


                      </Button>

                  </DialogActions>
              </DialogContent>

          </Dialog>



  </div>


   )


}

export default Home
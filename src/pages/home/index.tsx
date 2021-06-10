import React, { useState, useEffect } from 'react';
import { makeStyles,  } from '@material-ui/core/styles';
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
  const [Insertar, setInsertar] = useState(false);

  const [persons, setPersons] = useState({
    id: '',
    name: '',
    lastname: '',
    age: 0,
  });
  const handleClickOpen = () => {
    setInsertar(true);
  };
  const handleClose = () => {
    setInsertar(false);
  };

  return (<div>

    <br />
    <Button variant="outlined" color="primary"  onClick={handleClickOpen} >
      Agregar
      </Button>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={Insertar}>
        <DialogTitle id='customized-dialog-title'>
          Ingresando Planes </DialogTitle>
        <DialogContent dividers>
  

              <TextField
                variant='outlined'
                name='name'
                label='Nombre'
                fullWidth
                style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
              />


              <TextField
                variant='outlined'
                name='lastname'
                label='Apellidos'
                fullWidth
                style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
              />
              <TextField
                variant='outlined'
                name='age'
                label='Edad'
                fullWidth
                style={{ marginTop: '8px', marginLeft: '8px', paddingRight: '15px' }}
              />

              <DialogActions>
              <Button
                fullWidth={true}
                size='large'
                type='submit'
                style={{ marginTop: '15px' }}
                variant='contained'
                color='primary'
                onClick={handleClose}

              >
                agragar


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
              <Button variant="outlined" color="primary">
      Editar
      </Button>
              <Button variant="outlined" color="primary">
      eliminar
      </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
     
    
    <h2>Home hola</h2>
  </div>


  )


}

export default Home
import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'
import Lista from '../ui/components/Lista/Lista'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from "@mui/material";
import { useIndex } from '../data/hooks/pages/useindex';

const Home: NextPage = () => {
  const {
    listPets,
    petSelect,
    setPetSelect,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar

  } = useIndex();
  return (
    <div>
      <Titulo 
      titulo='' 
      subtitulo={
      <span>
        Com sua contribuição mensal, você <br/>
        pode <strong>adotar um pet virtualmente</strong>
      </span>
    } />

    <Lista
      pets ={listPets}
      onSelect = {(pet) => setPetSelect(pet)}
    />

      <Dialog 
        open={petSelect !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose = {() => setPetSelect(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField
            label={'E-mail'}
            type={'email'}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            label={'Quantia por mês'}
            type={'number'}
            fullWidth
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt:5 }}>
          <Button
            color={'secondary'}
            onClick = {() => setPetSelect(null)}
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog> 
      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
    </div>
  )
}

export default Home

import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { BoxTask } from './styles';



const TaskPage = () => {
    return (
      <>
        <Typography
          variant="h4"
          color="gray"
          sx={{ textAlign: "center", mt: 2, mb: 2 }}
        >
          Microtarefas Disponiveis:
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            width: "100vw",
          }}
        >
          <Grid item xs={12}>
            <BoxTask>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Desenvolver um Crud
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Descrição Microtarefa
                  </Typography>
                  <Typography variant="body2">
                    Desenvolver um Crud de microtarefas
                  </Typography>
                </CardContent>
                <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
                >
                  <Button size="small" variant='outlined'>Ler mais...</Button>
                </CardActions>
              </Card>
            </BoxTask>
          </Grid>
        </Grid>
      </>
    );
}


export default TaskPage
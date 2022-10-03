import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";


export function TrainingPage(){
    return(<>
        <Grid container>
            <Typography variant="h5" color="initial">Tela de Treinamentos</Typography>
            <Grid item xs={12}>
                <Typography variant="h5" color="initial">
                    

                </Typography>
            </Grid>
        <Outlet/>
        </Grid>
    </>
    )
}
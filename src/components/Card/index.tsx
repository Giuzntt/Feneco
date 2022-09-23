import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardContent sx={{
                width: '1150px',
                flexDirection: 'row',
                display: 'flex',
            }}>
                <Box>

                <Typography variant="h6" color="initial">
                   Nome da Vaga: 
                </Typography>

                <Typography variant="h6" color="initial">
                    Descrição:
                </Typography>
                <Typography variant="h6" color="initial">
                    Microtarefa:
                </Typography>
                </Box>

            </CardContent>
            <CardActions
                sx={{
                    maxWidth: '100%',
                    width: '1150px',
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'end',

                    
                }}
               
            >
                <Button size="small"
                variant="outlined"
                >Quero me candidatar</Button>
            </CardActions>
        </Card>
    );
}



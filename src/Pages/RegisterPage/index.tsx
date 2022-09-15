import { Fab, Grid } from "@mui/material";
// import { log } from "console";
import { useEffect, useState } from "react";
import api_viacep from "../../api/api";
import { CustomTextField } from "../../components/TextField";
import { BoxFab, BoxRegister, GridItem } from "./styles";
import Logo from "../../Assets/logo-login.svg"
import { FaArrowRight } from "react-icons/fa";

interface ICepState {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ddd: string;
}



export default function RegisterPage() {

    const [cepData, setCepData] = useState<string>('');
    const [cep, setCep] = useState<ICepState>({} as ICepState);


    
    useEffect(() => {
        api_viacep.get(`/${cepData}/json/`).then((response) => {
            setCep(response.data);
        }).catch((error) => {
            console.log(error);
        });

      
    }, [cepData]);

    return (
        // CENTERED CONTAINER
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(180deg, #FCC400 10%, #FCC400 60%);",
            }}
        
        >     
            <GridItem item xs={2}>
                <img src={Logo} alt="" />
            </GridItem>
            <BoxRegister>
                <CustomTextField
                    placeholder="Nome Completo"
                    type="text"
                    helperText=" "
                    disable={true}
                />
              
                <CustomTextField
                    placeholder="E-mail"
                    type="text"
                    helperText=" "
                    disable={true}
                />

                <CustomTextField
                    placeholder="Senha"
                    type="password"
                    helperText=" "
                    disable={true}
                />
                <CustomTextField
                    placeholder="Data de Nascimento"
                    type="text"
                    helperText=" "
                    disable={true}
                />
                <CustomTextField
                    placeholder="CPF"
                    helperText=" "
                    type="text"
                    disable={true}
                />
                
                
                <CustomTextField
                    placeholder="CEP"
                    type="text"

                    onChange = {(e) => {
                       
                        setCepData(e.target.value);
                    }}
                    value={cepData}
                    helperText="Insira seu CEP"
                    disable={true}
                />
                <CustomTextField
                    placeholder="Número"
                    helperText=" "
                    type="text"
                    disable={true}
                />
                <CustomTextField
                    placeholder="Rua"
                    type="text"
                    disable={false}
                    
                    value={cep.logradouro}
                />
                <CustomTextField
                    placeholder="Cidade"
                    type="text"
                    value={cep.localidade}
                    disable={false}
                />
                <CustomTextField
                    placeholder="Estado"
                    type="text"
                    value={cep.uf}
                    disable={false}
                />
                
            </BoxRegister>
        
            <BoxFab color="default" aria-label="add">
                <Fab color="default" aria-label="add">

                    <FaArrowRight className="icon"/>
                </Fab>
            </BoxFab>

        </Grid>
            )

        }
            
import { Grid } from "@mui/material";
// import { log } from "console";
import { useEffect, useState } from "react";
import api_viacep from "../../api/api";
import { CustomTextField } from "../../components/TextField";
import { BoxRegister } from "./styles";

interface ICepState {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ddd: string;
}



export default function RegisterPage() {

    const [cepData, setCepData] = useState<string>('02316050');
    const [cep, setCep] = useState<ICepState[]>([]);


    
    useEffect(() => {
        api_viacep.get(`/${cepData}/json/`).then((response) => {
            setCep(JSON.parse(JSON.stringify(response.data)));
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
                // background opacity  0.5
            }}
        
        >
            <BoxRegister>

                <CustomTextField
                    placeholder="Nome Completo"
                    type="text"
                />
              
                <CustomTextField
                    placeholder="E-mail"
                    type="text"
                />

                <CustomTextField
                    placeholder="Senha"
                    type="password"
                />
                <CustomTextField
                    placeholder="Data de Nascimento"
                    type="text"
                />
                <CustomTextField
                    placeholder="CPF"
                    type="text"
                />
                
                
                <CustomTextField
                    placeholder="CEP"
                    type="text"

                    onChange = {(e) => {
                       
                        setCepData(e.target.value);
                    }}
                    value={cepData}
                />
                {
                    cep.map((item) => {
                        return (
                            <>
                                <CustomTextField
                                    placeholder="Número"
                                    type="text"
                                    value={item.ddd}
                                />
                                <CustomTextField
                                    placeholder="Rua"
                                    type="text"
                                    disabled
                                    value={item.logradouro}
                                />
                                <CustomTextField
                                    placeholder="Cidade"
                                    type="text"
                                    value={item.localidade}
                                    disabled
                                />
                                <CustomTextField
                                    placeholder="Estado"
                                    type="text"
                                    value={item.uf}
                                    disabled
                                />
                            </>
                        )
                    }

                    )
                }
          
                
            </BoxRegister>
        

        </Grid>
            )

        }
            
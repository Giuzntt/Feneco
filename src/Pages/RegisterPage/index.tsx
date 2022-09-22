import { Box, Button,  Grid, IconButton, InputAdornment, Step, StepLabel, Stepper, Typography } from "@mui/material";
// import { log } from "console";
import { useCallback, useEffect, useState } from "react";
import api_viacep from "../../api/api";
import { CustomOutlinedInput, CustomTextField } from "../../components/TextField";
import {  BoxRegister, BoxRegisterTwo, GridItem } from "./styles";
import Logo from "../../Assets/logo-login.svg"
import {  FaSearch } from "react-icons/fa";

import { SelectField } from "../../components/Select";

interface ICepState {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ddd: string;
}

interface IFieldsProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    phone: string;
    cellphone: string;
    cpf: string;
}


const steps = [
  "Preencha informações básicas",	
  "Selecione sua especialidade",
  "Confirme seus dados",
];

let styleStepper = {
  '& .MuiStepLabel-root .Mui-completed': {
    color: '#F79200', // circle color (COMPLETED)
  },
  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
  {
    color: '#FFFFF', // Just text label (COMPLETED)
  },
  '& .MuiStepLabel-root .Mui-active': {
    color: '#F79200', // circle color (ACTIVE)
  },
  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
  {
    color: '#FFFFF', // Just text label (ACTIVE)
  },
  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: '#FFFF', // circle's number (ACTIVE)
  },
}


export default function RegisterPage() {
  const [cepData, setCepData] = useState<string>("");
  const [fields, setFields] = useState<IFieldsProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    phone: "",
    cellphone: "",
    cpf: "",
  });

  const [cep, setCep] = useState<ICepState>({} as ICepState);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(()=>new  Set<number>());
  const [changeSelect, setChangeSelect] = useState<string>("");
  const [changeSelectTwo, setChangeSelectTwo] = useState<string>("");
    const [changeSelectThree, setChangeSelectThree] = useState<string>("");


    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };
    
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

   


  const handleCep = async (e: any) => {
  
    e.preventDefault();
    const inputvalue = e.target.value;
    setCepData(e.target.value);
    
    if (inputvalue?.length === 8) {
      const response = await api_viacep.get(`${inputvalue}/json/`);
      console.log(response.data);

      setCep(response.data);
    }
  };


  

  const RegisterStepOne = useCallback(
    ({ fields, setFields, cep, cepData, setCepData }: any) => {
      return (
        <BoxRegister>
          {/* <FormControl > */}

          <CustomTextField
            key={"name"}
            placeholder="Nome Completo"
            type="text"
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            helperText=" "
          />

          <CustomTextField
            key={"email"}
            placeholder="E-mail"
            type="text"
            helperText=" "
          />

          <CustomTextField
            key={"password"}
            placeholder="Senha"
            type="password"
            helperText=" "
          />
          <CustomTextField
            key={"nascimento"}
            placeholder="Data de Nascimento"
            type="text"
            helperText=" "
          />
          <CustomTextField
            key={"cpf"}
            placeholder="CPF"
            helperText=" "
            type="text"
          />

          <CustomOutlinedInput
            key={"cep"}
            placeholder="CEP"
            type="text"
            value={cepData}
            onChange={(e) => {
              setCepData(e.target.value);
            }}
            onBlur={(e) => handleCep(e)}
            endArdoment={
              <InputAdornment position="end">
                <IconButton
                  onClick={(e) => {
                    handleCep(e);
                  }}
                >
                  <FaSearch style={{ fontSize: "20px" }} />
                </IconButton>
              </InputAdornment>
            }
          />
          <CustomTextField placeholder="Número" helperText=" " type="text" />
          <CustomTextField
            label="Rua"
            type="text"
            placeholder=""
            disabled
            value={cep.logradouro}
          />
          <CustomTextField
            label="Cidade"
            placeholder=""
            type="text"
            value={cep.localidade}
            disabled
          />
          <CustomTextField
            label="Estado"
            type="text"
            value={cep.uf}
            placeholder=""
            disabled
          />
          {/* </FormControl> */}
        </BoxRegister>
      );
    },
    []
  );

  const RegisterStepTwo = () => {
    return (
      <BoxRegisterTwo>
        <SelectField
          label="Selecione a área desejada"
          value={changeSelect}
          onChange={(e) => setChangeSelect(e.target.value)}
          options={[
            { value: "1", label: "Front-end Developer" },
            { value: "2", label: "Back-end Developer" },
          ]}
        />
        <SelectField
          label="Selecione a sua experiência"
          value={changeSelectTwo}
          onChange={(e) => setChangeSelectTwo(e.target.value)}
          options={[
            { value: "1", label: "Iniciante" },
            { value: "2", label: "Junior" },
            { value: "3", label: "Pleno" },
            { value: "4", label: "Senior" },
            { value: "5", label: "Especialista" },
          ]}
        />
        <SelectField
          label="Selecione o modelo de trabalho"
          value={changeSelectThree}
          onChange={(e) => setChangeSelectThree(e.target.value)}
          options={[
            { value: "1", label: "Remoto" },
            { value: "2", label: "Presencial" },
          ]}
        />
      </BoxRegisterTwo>
    );
    }
    const  RegisterStepThree = () =>{
        return (
          <BoxRegister>
            {/* create checkbox using mui to accept terms and conditions */}

            <CustomTextField
              placeholder="O que ama fazer?"
              type="text"
              helperText="Pressione Enter para pular linha"
              
              multiline={true}
            />
            <CustomTextField
              placeholder="O que possou fazer bem?"
              type="text"
              helperText="Pressione Enter para pular linha"
              
              multiline={true}
            />
            <CustomTextField
              placeholder="O que possou fazer bem?"
              type="text"
              helperText="Pressione Enter para pular linha"
              
              multiline={true}
            />
            <CustomTextField
              placeholder="O que possou fazer bem?"
              type="text"
              helperText="Pressione Enter para pular linha"
              
              multiline={true}
            />
          </BoxRegister>
        );
    }
    

    function getStepContent(step: number) {
      switch (step) {
        // case 0:
        //     return <RegisterStepOne />;
        case 0:
            return RegisterStepOne({
              fields,
              setFields,
              cep,
              cepData,
              setCepData,
            });
        // case 1:
        //     return <RegisterStepTwo/>
        // case 2:
        //     return <RegisterStepThree/>
        default:
            return "Unknown step";

      }
    }

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

      <Box sx={{ width: "50%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} sx={styleStepper}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5"  sx={{ mt: 2, mb: 1 , textAlign:'center', color:'#FFFF'}}>
              Você finalizou o cadastro!
            </Typography>
           
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
              {getStepContent(activeStep)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant="contained"
              >
                Voltar
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext}
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#FCC400",
                  ":hover": { backgroundColor: "#FCC400" },
                }}
              >
                {activeStep === steps.length - 1
                  ? "Finalizar cadastro"
                  : "Próximo"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Grid>
  );
}
            
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api_vagas } from "../api/api";



export interface IVagaProps {
    id?: string;
    nomeVaga?: string;
    descricao?: string;
    salario?: string;
    tipoVaga?: string;
    candidatura?: boolean;
    entrevista?: boolean;
    microtarefa?: boolean;
    beneficios?: string;
    microtarefas?: ITasksProps;
}

interface ITasksProps {
    id?: string | undefined;
    jobCheck?: boolean;
    taskCheck?: boolean;
    feedCheck?: boolean;
    nomeMicrotarefa?: string;
    descricao?: string;
    tipoMicrotarefa?: string;
    beneficios?: string;
}

interface VagasProviderProps {
  children: ReactNode;
}

interface VagasContextData {
    vagas: IVagaProps[];
    // findTaskById: (id: string | undefined) => Promise<void>;
    createTask: (data: ITasksProps) => Promise<void>;
    deleteJob: (id: string | undefined) => Promise<void>;
    updateJob: (data: IVagaProps, id: string | undefined) => Promise<void>;
    loadVagas: () => Promise<void>;
}

const VagasContext = React.createContext<VagasContextData>(
  {} as VagasContextData
);

export function VagasProvider({ children }: VagasProviderProps) {
  const [vagas, setVagas] = useState<IVagaProps[]>([]);

  
  useEffect(() => {
    

    loadVagas()
    
   
  }, []);


  async function loadVagas() {
      await api_vagas
          .get('/vagas')
          .then((response) => {
              if (response.status === 200) {
                  setVagas(response.data);
              } else if (response.status === 429) {
                  setTimeout(() => {
                      loadVagas();
                  }, 5000);
              }
          })
          .catch((error) => {
              console.log(error);
          });
  }

 


 

  async function createTask(data: ITasksProps): Promise<void> {
     await api_vagas.post("/vagas", data).then(
      (response) => {
        if (response.status === 201) {
          // create toastify
          toast.success("Vaga criada com sucesso!");

          setVagas([...vagas, response.data]);
        } else if (response.status === 400) {
          toast.error("Erro ao criar vaga!");
        }
        }).catch((error) => {
          toast.error("Erro ao criar vaga" );

        });
      }


      
    
      async function updateJob(data: IVagaProps, id: string | undefined): Promise<void> {
          await api_vagas
              .put(`/vagas/${id}`, data)
              .then((response) => {
                  if (response.status === 200) {
                      // create toastify
                      toast.success('Vaga atualizada com sucesso!');

                      setVagas([...vagas, response.data]);
                  } else if (response.status === 400) {
                      toast.error('Erro ao atualizar vaga!');
                  }
              })
              .catch((error) => {
                  toast.error('Erro ao atualizar vaga');
              });
      }



      async function deleteJob(id: string | undefined): Promise<void> {
        await api_vagas.delete(`/vagas/${id}`).then((response) => {
          if (response.status === 200) {
            
            setVagas(vagas.filter((vaga) => vaga.id !== id
            // remove from array vaga
            

            ));
          toast.success("Vaga deletada com sucesso!");
          } else if (response.status === 400) {
            toast.error("Erro ao deletar vaga!");
          }
        });
      }
  


  return <VagasContext.Provider value={{ deleteJob, vagas, createTask, updateJob, loadVagas }}>{children}</VagasContext.Provider>;
}

export function useVagas() {
  const context = useContext(VagasContext);
if (!context) {
    throw new Error("useVagas must be used within an VagasProvider");
  }


  return context;
}
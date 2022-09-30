import React, { ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { POSITION } from "react-toastify/dist/utils";
import { api_vagas } from "../api/api";



export interface IVagaProps {
  id?: string;
  nomeVaga?: string;
  descricao?: string;
  tipoVaga?: string;
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
    findTaskById: (id: string | undefined) => Promise<void>;
    createTask: (data: ITasksProps) => Promise<void>;
    tasks: ITasksProps[];
    deleteJob: (id: string | undefined) => Promise<void>;
}

const VagasContext = React.createContext<VagasContextData>(
  {} as VagasContextData
);

export function VagasProvider({ children }: VagasProviderProps) {
  const [vagas, setVagas] = useState<IVagaProps[]>([]);
  const [tasks, setTasks] = useState<ITasksProps[]>([]);

  useEffect(() => {
    async function loadVagas() {
      const response = await api_vagas.get("/vagas");
      setVagas(response.data);
    }
    loadVagas();
  }, []);

  async function findTaskById(id: string | undefined): Promise<void> {

    const response = await api_vagas.get(`/vagas/${id}/work`);
    let array: IVagaProps[] = [];
    array.push(response.data);
    setTasks(array);
    setVagas(array);
  }

 

  async function createTask(data: ITasksProps): Promise<void> {
     await api_vagas.post("/vagas", data).then(
      (response) => {
        if (response.status === 201) {
          // create toastify
          toast.success("Vaga criada com sucesso!");

          setTasks([...tasks, response.data]);
        } else if (response.status === 400) {
          toast.error("Erro ao criar vaga!");
        }
        }).catch((error) => {
          toast.error("Erro ao criar vaga");

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
  


  return <VagasContext.Provider value={{ deleteJob,tasks, vagas, findTaskById, createTask }}>{children}</VagasContext.Provider>;
}

export function useVagas() {
  const context = useContext(VagasContext);
if (!context) {
    throw new Error("useVagas must be used within an VagasProvider");
  }


  return context;
}
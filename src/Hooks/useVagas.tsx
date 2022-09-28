import React, { ReactNode, useContext, useEffect, useState } from "react";
import { api_vagas } from "../api/api";



export interface IVagaProps {
  id: string;
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
    tasks: ITasksProps[];
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
  }, [vagas]);

  async function findTaskById(id: string | undefined): Promise<void> {

    const response = await api_vagas.get(`/vagas/${id}/work`);
    let array: IVagaProps[] = [];
    array.push(response.data);
    setTasks(array);
    setVagas(array);

    // configure react router
    // navigate to task page

  }

  return <VagasContext.Provider value={{ tasks,vagas, findTaskById }}>{children}</VagasContext.Provider>;
}

export function useVagas() {
  const context = useContext(VagasContext);
if (!context) {
    throw new Error("useVagas must be used within an VagasProvider");
  }


  return context;
}
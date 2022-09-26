import React, { ReactNode, useContext, useEffect, useState } from "react";
import { api_vagas } from "../api/api";



export interface IVagaProps {
  id: number;
  nomeVaga: string;
  descricao: string;
  tipoVaga: string;
  beneficios: string;
  microtarefa?: string;
}

interface VagasProviderProps {
  children: ReactNode;
}

interface VagasContextData {
  vagas: IVagaProps[];
}

const VagasContext = React.createContext<VagasContextData>(
  {} as VagasContextData
);

export function VagasProvider({ children }: VagasProviderProps) {
  const [vagas, setVagas] = useState<IVagaProps[]>([]);

  useEffect(() => {
    async function loadVagas() {
      const response = await api_vagas.get("/vagas");
      setVagas(response.data);
    }
    loadVagas();
  }, [vagas]);

  return <VagasContext.Provider value={{ vagas }}>{children}</VagasContext.Provider>

}

export function useVagas() {
  const context = useContext(VagasContext);
if (!context) {
    throw new Error("useVagas must be used within an VagasProvider");
  }


  return context;
}
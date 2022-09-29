import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { api_task } from '../api/api';

interface ITasksProps {
    id?: string | undefined;
    nomeMicrotarefa?: string;
    descricao?: string;
    tipoMicrotarefa?: string;
    beneficios?: string;
}

interface TaskProviderProps {
    children: ReactNode;
}

interface TaskContextData {
   
    tasks: ITasksProps[];
}

const TaskContext = React.createContext<TaskContextData>({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<ITasksProps[]>([]);

    useEffect(() => {
        async function loadTask() {
            const response = await api_task.get('/users');
            setTasks(response.data);
        }
        loadTask();
    }, []);

    // async function findTaskById(id: string | undefined): Promise<void> {
    //     const response = await api_task.get(`/vagas/${id}/work`);
    //     let array: ITasksProps[] = [];
    //     array.push(response.data);
    //     setTasks(array);
        

    //     // configure react router
    //     // navigate to task page
    // }

    return <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>;
}

export function useVagas() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useVagas must be used within an TaskProvider');
    }

    return context;
}

import { useEffect, useState } from "react";
import api from "../api";
import { Candidate } from "../types/candidate";
import { steps } from "../utils/steps";

export const useCandidates = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const updateCandidate = (id: Candidate["id"], step: Candidate["step"]): void => {
        const updatedCandidates = candidates.map(c => c.id === id ?  {...c, step} : c)
        setCandidates(updatedCandidates);
        window.localStorage.setItem("candidatesLS", JSON.stringify(updatedCandidates))
    }
    
    const addCandidate = (): void => {
       const name = window.prompt("Nombre:")
       if(!name) return window.alert('"Nombre" es obligatorio')
       const comments = window.prompt("Comentarios (opcional):") ?? ""
       const newCandidate: Candidate = {
        name,
        comments,
        id: name,
        step: steps[0]
       }
       setCandidates([...candidates, newCandidate])
    }

    const fetchCandidates = (): void => {
      setLoading(true)
      const storage = localStorage.getItem("candidatesLS")
      if(storage) {
        setCandidates(JSON.parse(storage))
        setLoading(false)
        return;
      } 

      api.candidates.list().then(candidates => setCandidates(candidates))
      .catch((err: any) => console.log(err))
      .finally(() => setLoading(false))
    
    }

    useEffect(() => {
        fetchCandidates()
    }, [])

    return {
        loading,
        candidates,
        updateCandidate,
        addCandidate
    }
}
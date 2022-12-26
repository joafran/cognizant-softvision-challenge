import React from 'react'
import { Candidate } from '../types/candidate'
import CardCandidate from './CardCandidate'
import styles from '../App/App.module.scss'

type Props = {
    step: Candidate["step"]
    candidates: Candidate[]
    updateCandidate: (id: Candidate["id"], step: Candidate["step"]) => void
    addCandidate: () => void
}

const StepColumn: React.FC<Props> = ({ step, candidates, updateCandidate, addCandidate }) => {
  return (
    <div className={styles.stepColumn}>
      <h2>{step}</h2>
      <div className={styles.cardsContainer}>
      {
        candidates.length > 0 ? 
        candidates.map((candidate) => <CardCandidate key={candidate.id} updateCandidate={updateCandidate} candidate={candidate}/>)
        : <div className={styles.cardEmpty}>No hay candidatos</div>
      }
         {step === "Entrevista inicial" && (
          <button className={styles.btn} onClick={() => addCandidate()}>Agregar candidato</button>
         )}

      </div>
    </div>
  )
}

export default StepColumn
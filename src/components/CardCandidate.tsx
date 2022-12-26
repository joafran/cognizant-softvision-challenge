import React from 'react'
import { Candidate } from '../types/candidate'
import styles from '../App/App.module.scss'
import { steps } from '../utils/steps'

type Props = {
    candidate: Candidate
    updateCandidate: (id: Candidate["id"], step: Candidate["step"]) => void
}

const CardCandidate: React.FC<Props> = ({candidate, updateCandidate}) => {
    const stepIdx = steps.indexOf(candidate.step);
  return (
    <div className={styles.card}>
        <div>
            <h4>{candidate.name}</h4>
            {candidate.comments && <p>{candidate.comments}</p>}
        </div>
        <div>
            {steps[stepIdx - 1] && (
            <button 
             onClick={() => updateCandidate(candidate.id, steps[stepIdx -1])}
            >
                {"<="}
            </button>
            )}
            {steps[stepIdx + 1] && (
            <button 
             onClick={() => updateCandidate(candidate.id, steps[stepIdx +1])}
            >
                {"=>"}
            </button>)
            }
        </div>
    </div>
  )
}

export default CardCandidate
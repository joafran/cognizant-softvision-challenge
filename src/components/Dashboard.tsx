import React from 'react'
import StepColumn from './StepColumn'

import styles from '../App/App.module.scss'
import { steps } from '../utils/steps'
import { useCandidates } from '../hooks/useCandidates'

const Dashboard = () => {
    const { loading, candidates, updateCandidate, addCandidate } = useCandidates();

    if (loading) {
        return <p>Cargando...</p>
    }
    
  return (
    <div className={styles.dashboard}>
        {steps.map(step => 
            <StepColumn key={step} addCandidate={addCandidate} step={step} updateCandidate={updateCandidate} candidates={
                candidates.filter(c => c.step === step)
            } />
        )}
    </div>
  )
}

export default Dashboard
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import { db } from './../config/firebase'

export default function Home() {
  const [documentID, setDocumentID] = useState(1)

  async function CreateAnything() {
    await fetch('http://localhost:3000/api/anything/create')
      .then(response => {
        console.log('ok')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      <button
      className={styles.button}
        onClick={() => CreateAnything()}
      >
        Insere dados na collection anything
      </button>
    </div>
  )
}

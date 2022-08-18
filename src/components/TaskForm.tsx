import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

import { ITask } from '../interfaces/Task'

import styles from './TaskForm.module.css'

interface Props {
    btnText: string

}

const TaskForm = ({btnText}: Props) => {

    const [id, setId]                   = useState<number>(0)
    const [title, setTitle]             = useState<string>("")
    const [difficulty, setDifficulty]   = useState<number>(0)

  return (
    <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título</label>
            <input type="text" name='title' placeholder='Títula da Tarefa' />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade</label>
            <input type="number" name='difficulty' placeholder='Nível de dificuldade' />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm
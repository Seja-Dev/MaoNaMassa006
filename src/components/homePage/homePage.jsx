import { useState } from 'react'

import styles from './homePage.module.css'

import Input from '../input/input'
import Task from '../task/task'

export default function HomePageComponent () {
  return (
    <div className={styles.container}>
      <div className={styles.containerList}>
        <h2>Lista de tarefas</h2>
        <Input type="text" placeholder="Digite uma tarefa" />
        <div className={styles.taskList}>
          <Task text="Assistir os vídeos do SejaDev" />
          <Task text="Se inscrever no canal"/>
          <Task text="Ativar as notificações" />
          <Task text="Seguir no instagram @seja.dev" />
        </div>
      </div>
    </div>
  )
}
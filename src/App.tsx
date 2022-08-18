import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import { ITask } from './interfaces/Task'

import styles from './App.module.css'


function App() {
  return (
    <div className="App">
        
        <Header/>

        <main className={styles.main}>

          <div>
            <h2>Adicionar na Lista</h2>
            <TaskForm
              btnText={"Criar Tarefa"}
             />
          </div>

          <div>
            <h2>Minhas Tarefas:</h2>
            <TaskList />
          </div>
         
        </main>
      
        <Footer/>
     
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);

    function handleAddProject() {
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (<>
        <Header title="Homepage" />

        <img width={600} src={backgroundImage} />

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
    );
}

export default App;
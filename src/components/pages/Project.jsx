import styles from './Project.module.css'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Loading from '../layout/Loading';
import Container from '../layout/Container';

function Project() {
    const { id } = useParams("id");

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8080/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProject(data);
                }).catch(err => console.log(err))
        }, 300)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (<div className={styles.project_details}>
                <Container customClass="column" >
                    <div className={styles.details_container}>
                        <h1>Project: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Edit project' : 'Close'}</button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria: </span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total budget:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total used:</span> R${project.cost}
                                </p>
                            </div>
                        ) : (<div className={styles.project_info}>
                            <p>form</p>
                        </div>)}
                    </div>
                </Container>
            </div>) : (
                <Loading />
            )}
        </>
    );
}

export default Project;
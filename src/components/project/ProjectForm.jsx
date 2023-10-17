import { useState, useEffect } from 'react';

import Input from '../form/input';
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:8080/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json()).then(data => {
            setCategories(data)
        }).catch((err) => console.log(err))
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(project);
        //handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
        console.log(project);
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                placeholder="Project..."
                name="name"
                text="Project name"
                handleOnChange={handleChange}
                value={project.name}
            />
            <Input
                type="number"
                placeholder="1000"
                name="budget"
                text="Project budget"
                handleOnChange={handleChange}
                value={project.budget}
            />
            <Select
                name="category_id"
                text="Select an category"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category}
            />

            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
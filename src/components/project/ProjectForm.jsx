import Input from '../form/input';
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input type="text" placeholder="Project..." name="name" text="Project name" />
            <Input type="number" placeholder="1.000" name="budget" text="Project budget" />
            <Select name="category_id" text="Select an category" />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
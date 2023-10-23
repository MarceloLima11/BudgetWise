import loading from '../../img/Loading.svg'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt="A loading spin animated" className={styles.loader} />
        </div>
    );
}

export default Loading;
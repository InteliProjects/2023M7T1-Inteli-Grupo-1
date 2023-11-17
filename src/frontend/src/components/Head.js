import styles from './Head.module.css'

function Head({word}) {
    return (
        <div className={styles.colorDigit}>
            <h1>{word}</h1>
            <div className={styles.separator}></div>
        </div>
    )
}

export default Head
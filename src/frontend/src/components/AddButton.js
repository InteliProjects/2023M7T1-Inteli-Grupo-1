import styles from './AddButton.module.css'


function AddButton(props) {

    return (
        <>
            <button onClick={props.showModal} className={styles.addButton}>
                <ion-icon name="add-circle-outline"></ion-icon>
            </button>
        </>
    )
}

export default AddButton
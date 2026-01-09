import styles from './ActivateBadge.module.scss'

export default function Activate() {
    return(
        <div className={styles.badge}>
            <h1 className={styles.title}>Activate Windows</h1>
            <h3 className={styles.content}>Go to Settings to activate Windows.</h3>
        </div>
    )
}
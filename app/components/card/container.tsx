import styles from './container-styles.module.css'
export default function ContainerCards({ children }: { children: React.ReactNode}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

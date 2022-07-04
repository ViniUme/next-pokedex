import styles from '../styles/card.module.scss';

export default function Card({pokemon}: any): JSX.Element{

    console.log(pokemon);
    return(
        <div className={styles.card}>

        </div>
    );
}
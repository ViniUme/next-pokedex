import styles from '../styles/types.module.scss';

export default function Types({types}){

    if(types.length === 1){

        const type = types[0].type.name

        return(
            <>
                <span className={`${styles.type} ${type}`}>{type}</span>
            </>
        )
    }
    else{

        const type = [
            types[0].type.name,
            types[1].type.name
        ]

        return(
            <>
                <span className={`${styles.type} ${type[0]}`}>{type[0]}</span>
                <span className={`${styles.type} ${type[1]}`}>{type[1]}</span>
            </>
        )
    }

}
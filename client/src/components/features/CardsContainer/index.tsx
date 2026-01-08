import { ReactNode } from 'react';
import styles from './CardsContainer.module.scss'

export type CardOptions = {
    title?: string,
    content: string | ReactNode,
    image?: string
}

export type CardsContainerProps = {
    cards: CardOptions[],
    columns?: number,
}

export default function CardsContainer(props: CardsContainerProps) {
    const containerStyles = {
        "--num-columns": props.columns ?? 4
    } as React.CSSProperties;

    return (
        <div className={styles.container} style={containerStyles}>
            {props.cards.map((card, index) => (
                <div className={styles.card} key={index}>
                    {card.image && <img className={styles.image} src={card.image} alt="" /> }
                    <div className={styles.info}>
                        <span className={styles.title}>{card.title}</span>
                        <span className={styles.content}>{card.content}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
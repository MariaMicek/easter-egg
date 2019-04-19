import React from 'react'
import egg from './egg.svg'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    egg: {
        width: '290px',
    },
    text: {
        margin: '30px 0',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'lighter',
        fontFamily: "'Raleway', sans-serif"
    }
}

const NotPaintedEgg = (props) => {
    return (
        <div
            style={styles.container}
        >
            <h1
                style={styles.text}
            >
                Kliknij aby pomalować jajko!
			</h1>
            <img
                style={styles.egg}
                src={egg}
                alt={'Niepomalowane jajko wielkanocne'}
                onClick={props.paintEgg}
            />
        </div>
    )
}

export default NotPaintedEgg
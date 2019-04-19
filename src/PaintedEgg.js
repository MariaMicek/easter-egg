import React from 'react'
import paintedEgg from './egg-painted.svg'

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

const PaintedEgg = (props) => {
    return (
        <div
            style={styles.container}
        >
            <h1
                style={styles.text}
            >
                Wesołych świąt!!!
			</h1>
            <img
                style={styles.egg}
                src={paintedEgg}
                alt={'Pomalowane jajko wielkanocne'}
            />
        </div>
    )
}

export default PaintedEgg
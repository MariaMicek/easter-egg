import React from 'react'
import { connect } from 'react-redux'
import { paintEggActionCreator } from './state/egg'
import PaintedEgg from './PaintedEgg'
import NotPaintedEgg from './NotPaintedEgg'

const App = (props) => {
	return (
		<div>
			{
				props._isPainted ?
					<PaintedEgg 
					paintEgg={props._paintEgg}
					/>
					:
					<NotPaintedEgg
						paintEgg={props._paintEgg}
					/>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	_isPainted: state.egg.isPainted
})

const mapDispatchToProps = dispatch => ({
	_paintEgg: (value) => dispatch(paintEggActionCreator(value))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

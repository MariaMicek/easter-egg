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
					<PaintedEgg />
					:
					<NotPaintedEgg
						paintEgg={props._paintEgg}
					/>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	_isPainted: state.isPainted
})

const mapDispatchToProps = dispatch => ({
	_paintEgg: () => dispatch(paintEggActionCreator())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

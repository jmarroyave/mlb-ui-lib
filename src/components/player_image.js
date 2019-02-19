import React from 'react';
import t from 'prop-types'


class PlayerImageComponent extends React.Component {
	render(){
		const id = (this.props.data) ? this.props.data.id : null;
		const size = (this.props.size) ? this.props.size : null;		
		const action = ("action" in this.props) ? true : false
		var height = 0,width;
		var style = {};
		var uri = (action) ? `http://mlb.com/images/players/525x330/${id}.jpg` : `https://gd.mlb.com/images/gameday/mugshots/mlb/${id}@2x.jpg`;
		switch (size){
			case "xs":
				height = 42;
				width = 34;
				break;				
			case "s":
				height = 56;
				width = 46;
				break;				
			case "fit":
				height = 0;
				width = '100%';
				break;
			default:
				height = 64;
		}
		return (
			<div>
				{(height > 0) ?
					<div style={{border:'1px solid #CCC',borderRadius: height, height: height, width: width, overflow: 'hidden'}}>
						<img src={uri} height={height} width={width} preload={'./res/img/pl/face.jpg'}/>
					</div>
				:
					<img src={uri} width={width} preload={'./res/img/pl/action.jpg'}/>
				}
			</div>
		);
	}
}

export default PlayerImageComponent;

PlayerImageComponent.propTypes = {
	id: t.number.isRequired,
	size: t.oneOf(['xs', 's', 'fit']),
}

PlayerImageComponent.defaultProps = {
	size: 'xs',
}
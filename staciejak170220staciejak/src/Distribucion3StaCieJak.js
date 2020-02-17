import React, {Component } from 'react'
import Imagen from 'react-image'

class Distribucion3StaCieJak extends Component {
	render(){
		return(
			<div>
                <div className="galeriaStaCieJak">
                    <div><Imagen alt="foto 1" src={require('./img/Paisaje1StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 2" src={require('./img/Paisaje2StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 3" src={require('./img/Paisaje3StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 4" src={require('./img/Paisaje4StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 5" src={require('./img/Paisaje5StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 6" src={require('./img/Paisaje6StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 7" src={require('./img/Paisaje7StaCieJak.jpg')} /></div>
                    <div><Imagen alt="foto 8" src={require('./img/Paisaje8StaCieJak.jpg')} /></div>
                </div>
			</div>
        )	
	}
}

export default Distribucion3StaCieJak
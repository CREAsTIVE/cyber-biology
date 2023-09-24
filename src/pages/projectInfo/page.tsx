import './style.css'
import CBLogo from 'src/resources/CBLogo.png'

export default (
    <div className="content-page" id="page-project-content">
        <div className='info-container'>
            <div className='logo-container'>
                <img className='logo' src={CBLogo}/>
            </div>
            <div className='project-info'>
                <div className='title'>Project Title</div>
            </div>
        </div>
        <div className='description'>
            <div className='header'>
                <div className='text'>
                    Description
                </div>
            </div>
            <div className='text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, magni maxime perspiciatis similique amet quo minima neque, commodi, velit totam laudantium necess autem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, magni maxime perspiciatis similique amet quo minima neque, commodi, velit totam laudantium necess autem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, magni maxime perspiciatis similique amet quo minima neque, commodi, velit totam laudantium necess autem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, magni maxime perspiciatis similique amet quo minima neque, commodi, velit totam laudantium necess autem..
            </div>
        </div>
    </div>
);
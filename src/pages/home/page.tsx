import CBLogo from "src/resources/CBLogo.png"
import "./style.css"

export default (
    <div className="content-page" id="page-home">
        <div className="main-info">
            <div className="text">
                CyberBiology - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, magni maxime perspiciatis similique amet quo minima neque, commodi, velit totam laudantium necess autem.
            </div>
            <img src={CBLogo}/>
        </div>
        <div className="info-blocks-container">
            <div className="info-block">
                <img src={CBLogo}/>
                <div className="content">
                    <div className="header">CyberBiology</div>
                    <div className="description">Lorem ipsum dolor sit, amet consectetur....</div>
                </div>
            </div>
            <div className="info-block">
                <img src={CBLogo}/>
                <div className="content">
                    <div className="header">CyberBiology</div>
                    <div className="description">Lorem ipsum dolor sit, amet consectetur....</div>
                </div>
            </div>
            <div className="info-block">
                <img src={CBLogo}/>
                <div className="content">
                    <div className="header">CyberBiology</div>
                    <div className="description">Lorem ipsum dolor sit, amet consectetur....</div>
                </div>
            </div>
        </div>
    </div>
)
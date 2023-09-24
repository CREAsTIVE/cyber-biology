import CBLogo from "src/resources/CBLogo.png"
import './style.css'

export default (
    <div className="content-page" id="page-projects">
        <div className="header">CyberBiology projects</div>
        <div className="projects" id="page-projects-project-list">
            <div className="project">
                <div className="page-header">
                    <img src={CBLogo}/>
                    <div className="name">ProjectHeader</div>
                </div>
                <div className="description">Some project description, its describe some aspects of the this project...</div>
            </div>
            <div className="project">
                <div className="page-header">
                    <img src={CBLogo}/>
                    <div className="name">ProjectHeader</div>
                </div>
                <div className="description">Some project description, its describe some aspects of the this project...</div>
            </div>
            <div className="project">
                <div className="page-header">
                    <img src={CBLogo}/>
                    <div className="name">ProjectHeader</div>
                </div>
                <div className="description">
                    Some project description, its describe some aspects of the this project...
                    MORE DESC DADABDAOIDHSAIHSDPAIHDPAHDPHAWDPOHADPOHA
                    DADABDAOIDHSAIHSDPAIHDPAHDPHAWDPOHADPOHA
                    DADABDAOIDHSAIHSDPAIHDPAHDPHAWDPOHADPOHA
                    DADABDAOIDHSAIHSDPAIHDPAHDPHAWDPOHADPOHA
                </div>
            </div>
        </div>
    </div>
)
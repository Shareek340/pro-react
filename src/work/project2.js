
import ProjectTeamComponent from './ProjectTeamComponent'
import ProjectScript from './ProjectScript'
import './project1.css'
import img1 from '../assets/pro2.png'

function Project2() {
  return (
    <div className={`Project-work`}>
        <img src={img1}/>
      <div className={`discover-work`}>
        <div className={`project-WorkS-container`}>
          <p className={`project-WorkS`}>Project Name</p>
          <p className={`apollo-WorkS-design-title`}>Raitland Coworking Space</p>
        </div>
        <div className={`project-type`}>
          <p className={`project-typeS`}>Project Type</p>
          <p className={`branding-work`}>Branding </p>
        </div>
        <div className={`project-progress-bar`}>
          <p className={`progress-indicator`}>2/5</p>
        </div>
      </div>
      <div className={`project-details`}>
        <div className={`project-duration-container`}>
          <p className={`project-team-title`}>Project Duration</p>
          <p className={`project-duration`}>Jun 2022 - Jul 2022</p>
        </div>
        <ProjectTeamComponent />
        <ProjectScript />
        <div className={`project-details1`}>
          <p className={`case-work-title`}>View Case Study</p>
          <div className={`image-container10`}>
            <img className={`image-work img-content-cb1bc4af`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project2

import ProjectTeamComponent from './ProjectTeamComponent'
import ProjectScript from './ProjectScript'
import './project1.css'
import img1 from '../assets/pro3.png'

function Project3() {
  return (
    <div className={`Project-work`}>
        <img className='img-pro' src={img1}/>
      <div className={`discover-work`}>
        <div className={`project-WorkS-container`}>
          <p className={`project-WorkS`}>Project Name</p>
          <p className={`apollo-WorkS-design-title`}>Harley Davidson Jacket </p>
        </div>
        <div className={`project-type`}>
          <p className={`project-typeS`}>Project Type</p>
          <p className={`branding-work`}>Branding </p>
        </div>
        <div className={`project-progress-bar`}>
          <p className={`progress-indicator`}>3/5</p>
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
          <p className={`case-work-title case-pro`}>View Case Study</p>
          <div className={`image-container10`}>
            <img className={`image-work img-content-cb1bc4af`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project3
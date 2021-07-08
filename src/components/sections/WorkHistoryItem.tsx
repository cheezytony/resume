import { Job, Position, Project } from "../../../types/profile";

function WorkHistoryItem({ job }: { job: Job }) {
  const { company, projects, positions, joinedAt, leftAt } = job;
  const joinedDate = joinedAt.split('-');
  const yearStarted = joinedDate[1];
  const leftDate = leftAt?.split('-');
  const yearEnded = leftDate?.[1];
  const stillWorksHere = !leftDate;
  
  return (
    <div className="app__work__history__item">
      <div className="app__work__history__item__title">
        <h4 className="app__work__history__item__company">
          { company.name }
        </h4>
        <div className="app__work__history__item__date">
          <span>{yearStarted}</span>
          <span>-</span>
          {
            stillWorksHere ? (
              <span>Present</span>
            ) : (
              <span>{yearEnded}</span>
            )
          }
        </div>
      </div>

      <h5>Positions and Responsibilities</h5>
      { positions.map((position: Position, positionIndex: number) => (
        <div key={positionIndex} className="app__work__history__item__position">
          <h6>{ position.title }</h6>
          <ul>
            { position.responsibilities.map((responsibility: string, responsibilityIndex: number) => (
              <li key={ responsibilityIndex }>{ responsibility }</li>
            )) }
          </ul>
        </div>
      )) }

      <h5>Projects</h5>
      { projects.map((project: Project, projectIndex: number) => (
        <div key={ projectIndex }>
          <h6>
            <a href={ project.url } target="_blank" rel="noreferrer">{ project.title }</a>
          </h6>
          <ul>
            {project.contributions.map((contribution: string, contributionIndex: number) => (
              <li key={ contributionIndex }>{ contribution }</li>
            )) }
          </ul>
        </div>
      )) }

    </div>
  );
}

export default WorkHistoryItem;

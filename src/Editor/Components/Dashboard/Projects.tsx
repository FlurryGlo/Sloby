import { BsThreeDotsVertical } from "react-icons/bs";
import { FaImages } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store";
import { ProjectState } from "../../store/dashboard/dashboardSlice";
import {
  Description,
  EmptyProjects,
  IntegrationButton,
  ProfilePicture,
  Project,
  ProjectContainer,
  ProjectsHandler,
  ProjectTitle,
  ProjectTitleContainer,
  Title,
} from "../../utils/styles/Dashboard";
import Search from "./Search";

function Projects() {
  const dashboardSlice = useSelector((state: RootState) => state.projectDashboard);
  const navigate = useNavigate();
  const EmptyProject = () => {
    return (
      <EmptyProjects>
        <FaImages className="large-icon" />
        <Description>You have no projects to show, let is create one.</Description>
      </EmptyProjects>
    );
  };
  const handleProjectOpening = (navigate: NavigateFunction) => {
    console.log("Inside of opening a project");
    return navigate(`/editor/workspace/${uuidv4()}`);
  };

  return (
    <>
      <Search />
      <ProjectsHandler>
        <Title>Your Projects</Title>
        <ProjectContainer>
          {dashboardSlice.projects.length === 0 ? (
            <EmptyProject />
          ) : (
            <>
              {dashboardSlice.projects.map((item: ProjectState, index: number) => {
                return (
                  <Project key={index} onClick={() => handleProjectOpening(navigate)}>
                    <IntegrationButton>
                      {" "}
                      <BsThreeDotsVertical className="integration-button-icon" />{" "}
                    </IntegrationButton>
                    <ProfilePicture />
                    <ProjectTitleContainer>
                      <ProjectTitle>{item.projectName}</ProjectTitle>
                    </ProjectTitleContainer>
                  </Project>
                );
              })}
            </>
          )}
        </ProjectContainer>
      </ProjectsHandler>
    </>
  );
}

export default Projects;

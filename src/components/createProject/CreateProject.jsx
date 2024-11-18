
import { useState } from "react";
import "./CreateProject.css"; // Create a CSS file and copy the CSS styles there.


const CreateProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreate = () => {
    console.log("Project Created:", projectName);
    setProjectName("");
    closeModal();
  };
  return (
    <section className="create-project">
      <div className="project-container">
        <header className="header-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a9b0986f9267c9e6af82c671a815481a1420f48cb36efaff96482dcbd01995?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
            alt="Company logo"
            className="logo"
          />
          <div className="icon-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a108522d8d37e51ec303e7a440751b47616a425b6c42a9f8471ed4c3fc30a22?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
              alt=""
              className="icon-small"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ab9362afcb3dd9f1bcda13bcb1e19fc85efa998fdcba73af2383292ea9c0285?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
              alt=""
              className="icon-large"
            />
          </div>
        </header>
        <h1 className="project-title">Create a New Project</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c85f94a0f033e64a9ea784eaa0fc4176a8ce007ce161bcb835bb0bf7e27215?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
          alt="Project illustration"
          className="project-image"
        />
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <button className="create-button" onClick={openModal}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a5fb6a10fbe65e39d8f077ac0dfe656fe856911ddfbc393aa742badc83a92b?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
            alt=""
            className="button-icon"
          />
          <span className="button-text">Create New Project</span>
        </button>
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h2>Create Project</h2>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Type here"
                required
              />
              <button onClick={closeModal} className="close-button">Cancel</button>
              <button onClick={handleCreate}>Create</button>
            </div>
          </div>
        )}
        <div className="setup-section">
          <div className="setup-content">
            <h2 className="setup-title">Set up Ques with Ease!</h2>
            <p className="setup-description">Lorem ipsum dolor sit amet, consectetur</p>
            <div className="progress-wrapper">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="5"
              ></div>
              <span>0/5</span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfb68ec38c867d7493e5b82c38ca7e4094ee0ee1a07e583a7efc5c07c1e1b32f?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
            alt=""
            className="setup-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default CreateProject;

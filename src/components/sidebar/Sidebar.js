import logo from './onesoil-logo.svg';
import './Sidebar.css'
import FieldsOverview from "../fields-overview/FieldsOverview";
import fieldsMock from './fields-mock.json';

function Sidebar() {

  return(
    <div className="sidebar">
      <header className="sidebar__header">
        <img className="sidebar__logo" alt="OneSoil" src={logo} />
        <h2 className="sidebar__title">Yield Project</h2>
      </header>
      <div className="sidebar__fields-viewer">
        <button type="button" className="sidebar__season-chooser season-chooser-button">
          <svg className="season-chooser-button__calendar-icon" width="18" height="20" fill="none"><g clipPath="url(#clip0_19_18036)"><path d="M16 6H2v11h14V6zm2-3v14c0 1.1-.9 2-2 2H2a2 2 0 01-2-2L.01 3C.01 1.9.89 1 2 1h1v-2h2v2h8v-2h2v2h1c1.1 0 2 .9 2 2zm-4 7h-2V8h2v2zm-4 0H8V8h2v2zm-4 0H4V8h2v2z" fill="#000"/></g><defs><clipPath id="clip0_19_18036"><path fill="#fff" d="M0 0h18v20H0z"/></clipPath></defs></svg>
          Season 2021
          <svg className="season-chooser-button__arrow-icon" width="16" height="22" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6 14.5l4-3.509L6 7.5v7z" fill="#222"/></svg>
        </button>
        <FieldsOverview fieldsGroup={fieldsMock.fieldsGroups}/>
      </div>
      <button type="button" className="sidebar__action-button action-button">
        <svg className="action-button__icon" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 4a1 1 0 00-1 1v4H5a1 1 0 000 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V5a1 1 0 00-1-1z" fill="#fff"/></svg>
        Add fields
      </button>
      <div className="sidebar__footer">
        <button type="button" className="sidebar__guide-button guide-button">
          <svg className="guide-button__icon" width="16" height="18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2.56 0h10.88c.89 0 1.21.1 1.54.27.32.17.58.43.75.75.18.33.27.65.27 1.54v12.88c0 .89-.1 1.21-.27 1.54-.17.32-.43.58-.75.75-.33.18-.65.27-1.54.27H2.56c-.89 0-1.21-.1-1.54-.27a1.82 1.82 0 01-.75-.75c-.18-.33-.27-.65-.27-1.54V2.56c0-.89.1-1.21.27-1.54C.44.7.7.44 1.02.27 1.35.09 1.67 0 2.56 0zM3 0v18H2V0h1zm11 4v4H5V4h9z" fill="#A5B2BC"/></svg>
          User Guide
        </button>
        <button type="button" className="sidebar__profile-button" aria-label="Profile">
          <svg width="24" height="24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.522 24C5.376 24 0 18.624 0 12.522 0 5.376 5.376 0 12.522 0 18.624 0 24 5.376 24 12.522 24 18.624 18.624 24 12.522 24zM7.725 13.078c.265.653.692.952.888.892.195-.062.273-.19.273-.19s.175.682.289 1.018c.36 1.068 1.638 2.278 2.36 2.486.406.117.63.087 1.011 0 .535-.12 1.743-1.088 2.305-2.434l.041-.113a5.67 5.67 0 00.286-1c0-.018.004-.014.02 0a.487.487 0 00.293.12c.226.028.344-.223.533-.628.042-.09.088-.187.139-.291.506-1.2.433-2.014.093-2.076-.166-.03-.281.052-.394.155-.056 0-.111 0-.111-.052 0-.294.048-.706.129-1.399.019-.16.04-.336.061-.528.268-2.317-.316-3.063-.316-3.063s-.34.216-1.754-.361c-1.014-.413-2.5-.558-3.736-.168-.879.278-.684.78-.684.78s-.878-.341-1.393.71c-.317.646-.153 1.373.07 2.361l.08.356c.075.343.095.686.113.98.012.201.023.379.049.52 0 0-.115.104-.207.015l-.006-.005c-.097-.093-.35-.335-.5-.335-.169 0-.39.266-.32.809.073.543.122.787.388 1.44zm7.704 4.515a1 1 0 01.91.01l1.539.806c.502.264.667.884.272 1.29-.902.926-2.812 2.318-6.153 2.318-3.339 0-5.246-1.39-6.146-2.316-.396-.407-.23-1.027.275-1.29l1.56-.811a1 1 0 01.907-.008l2.977 1.48a1 1 0 00.89 0l2.97-1.479z" fill="#A5B2BC"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Sidebar;

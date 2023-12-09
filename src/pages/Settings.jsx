import React, { useState } from "react";
import "./Settings.css"; // Import the external CSS file

const Settings = () => {
  const [appSettings, setAppSettings] = useState({
    showNotifications: true,
    darkMode: false,
    language: "en",
  });

  const handleSettingChange = (setting) => {
    setAppSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="container">
      <h2 className="page-header">Admin Settings</h2>
      <div className="card settings-card">
        <div className="card__body">
          <div className="setting">
            <label>
              <input
                type="checkbox"
                checked={appSettings.showNotifications}
                onChange={() => handleSettingChange("showNotifications")}
              />
              <span>Show Notifications</span>
            </label>
          </div>
          <div className="setting">
            <label>
              <input
                type="checkbox"
                checked={appSettings.darkMode}
                onChange={() => handleSettingChange("darkMode")}
              />
              <span>Dark Mode</span>
            </label>
          </div>
          <div className="setting">
            <label>
              Language:
              <select
                value={appSettings.language}
                onChange={(e) => handleSettingChange("language")}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

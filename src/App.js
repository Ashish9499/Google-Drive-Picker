import React,{ useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
import './App.css';

function App() {
  const [openPicker, data, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId:"####yourclientid###",
      developerKey:"###yourapikey###",
      viewId:"DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    
    });
  };

  useEffect(() => {
    if (data) {
      data.docs.map((i) => console.log(i));
    }
  }, [data]);

  return (
    <div className="button">
      <button className="picker" onClick={() => handleOpenPicker()}>Google Drive Uploader</button>
    </div>
  );
}

export default App;
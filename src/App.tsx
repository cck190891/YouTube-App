
import JSblock from './api/eval';
import { init_tray } from './api/trayicon';
import html_result_listen from './api/listen';
import { create_webviewwindow } from './api/utils/plugin-webview';

// Issue: 
// 1. webview setFocus has issue (plugin-webview.tsx)
//    setFocus in trayicon.tsx is normal work but not in plugin-webview.tsx
function App() {

  document.title = 'Controller'
  document.addEventListener('keydown', function (event) {
    // Prevent F5 or Ctrl+R (Windows/Linux) and Command+R (Mac) from refreshing the page
    if (
      event.key === 'F5' ||
      (event.ctrlKey && event.key === 'r') ||
      (event.metaKey && event.key === 'r')
    ) {
      event.preventDefault();
    }
  });

  document.addEventListener('contextmenu', function (event) {
    console.log('contextmenu:', event)
    event.preventDefault();
  });



  init_tray();
  html_result_listen();
  create_webviewwindow('https://www.youtube.com/')
  
  return (
    <>
      <button onClick={() => create_webviewwindow('https://www.youtube.com/')}>新分頁</button>
      <JSblock></JSblock>
    </>
    );
}

export default App;
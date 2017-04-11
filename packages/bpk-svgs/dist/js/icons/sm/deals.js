import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M14 5h-1.78a2 2 0 0 0 .28-1A2 2 0 0 0 9 2.69 2 2 0 0 0 5.78 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-3.5-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm8.5 9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-3-3.68l-1.5 1.54.35 2.14L9 12l-1.85 1 .35-2.17L6 9.32 8.07 9 9 7l.93 2z" /></svg>;
  }

}
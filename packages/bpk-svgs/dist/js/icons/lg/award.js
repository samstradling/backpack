import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style={{
  width: "2rem",
  height: "2rem"
}} {...props}><path d="M19 1.5H5a3 3 0 0 0-3 3v3.7a2 2 0 0 0 1.188 1.828l6.657 2.96a5 5 0 1 0 4.31 0l6.657-2.96A2 2 0 0 0 22 8.2V4.5a3 3 0 0 0-3-3zm-4 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm0-8.618a1 1 0 0 1-.553.894l-2 1a1 1 0 0 1-.894 0l-2-1A1 1 0 0 1 9 8.882V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" /></svg>);
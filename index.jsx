import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import "./styles.css"

// Make sure the DOM is fully loaded before rendering
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root")

  if (container) {
    const root = createRoot(container)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    console.error("Failed to find the root element")
  }
})


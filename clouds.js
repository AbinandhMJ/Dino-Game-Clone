import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./update.js"
  
  const SPEED = 0.05
  const cloudsElems = document.querySelectorAll("[data-clouds]")
  
  export function setupclouds() {
    setCustomProperty(cloudsElems[0], "--left", 0)
    setCustomProperty(cloudsElems[1], "--left", 300)
  }
  
  export function updateclouds(delta, speedScale) {
    cloudsElems.forEach(clouds => {
      incrementCustomProperty(clouds, "--left", delta * speedScale * SPEED * -1)
  
      if (getCustomProperty(clouds, "--left") <= -300) {
        incrementCustomProperty(clouds, "--left", 600)
      }
    })
  }
  
import { useState } from "react";

export const useDisplaySuccessMessage = (displayTime = 2000) => {
  // State
  const [showSuccess, setShowSuccess] = useState(false);

  // Comportements
  const displaySuccessMessage = () => {
    // Set a flag to show the div
    setShowSuccess(true);

    // Hide the div after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, displayTime);
  };

  // Pas d'affichage, le custom hook s'occupe uniquement de la logique / des fonctions, et des states
  return { showSuccess, displaySuccessMessage };
};

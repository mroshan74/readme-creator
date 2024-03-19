import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [backup, setBackup] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const localBackup = localStorage.getItem("readme-backup");
    if(localBackup) {
      setBackup(JSON.parse(localBackup));
    }
  },[])

  const saveBackup = (templates) => {
    try {
      if(timer) {
        clearTimeout(timer)
      }
      setTimer(
        setTimeout(() => {
          localStorage.setItem("readme-backup", JSON.stringify(templates), 1000);
        })
      )
    }
    catch(err) {
      console.log("Failed to create local backup", err)
    }
  }

  const deleteBackup = () => {
    try {
      localStorage.removeItem("readme-backup");
    }
    catch(err) {
      console.log("Failed to delete local backup", err)
    }
  }

  return {
    backup,
    saveBackup,
    deleteBackup
  }
}

export default useLocalStorage
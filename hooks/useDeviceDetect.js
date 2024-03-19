import { useEffect, useState } from "react"

const useDeviceDetect = () => {
  const [ isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Mobi|Android|BlackBerry|iPhone/i));
    setIsMobile(mobile);
  },[])

  return { isMobile };
}

export default useDeviceDetect
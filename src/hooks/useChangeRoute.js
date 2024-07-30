import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useChangeRoute = () => {
    const [activeTab, setActiveTab] = useState("vip");
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const currentPath = location.pathname.split('/').pop();
        if (currentPath !== activeTab) {
          setActiveTab(currentPath);
        }
      }, [location.pathname, activeTab]);

      return { navigate, setActiveTab }
}


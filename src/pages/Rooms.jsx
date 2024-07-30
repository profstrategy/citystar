import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import ButtonGroup from '../ui/ButtonGroup';
import Row from '../ui/Row';

const Rooms = () => {
  const [activeTab, setActiveTab] = useState("vip");
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/rooms/${tab}`);
  };

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    if (currentPath !== activeTab) {
      setActiveTab(currentPath);
    }
  }, [location.pathname, activeTab]);

  return (
    <>
      <Row type="horizontal">
        <ButtonGroup>
          <Button variation="secondary" onClick={() => handleTabChange('vip')} >
            V.I.P
          </Button>
          <Button variation="secondary" onClick={() => handleTabChange('premium')}>
            PREMIUM
          </Button>
        </ButtonGroup>
      </Row>
      <Outlet />
    </>
  );
};

export default Rooms;



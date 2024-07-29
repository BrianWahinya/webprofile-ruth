import { useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

const NavTabs = ({ data }) => {
  const [current, setCurrent] = useState(data[0].id);

  const onClick = (e) => {
    setCurrent(e.currentTarget.id);
  };

  return (
    <div className="div-navtabs">
      <Nav tabs>
        {data.map((item) => (
          <NavItem key={`navitem_${item.id}`}>
            <NavLink
              className={current === item.id ? "active" : ""}
              id={item.id}
              onClick={onClick}
            >
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={current}>
        {data.map((item) => (
          <TabPane key={`tabpane_${item.id}`} tabId={item.id}>
            {item.content}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};
export default NavTabs;

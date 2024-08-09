import { useEffect, useState } from "react";
import { Proposal } from "../../features";

const clickTarget = 7;
const Avatar = () => {
  const [clicked, setClicked] = useState(0);

  const onClick = () => {
    if (clicked < clickTarget) {
      setClicked((prev) => (prev += 1));
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      setClicked(0);
    }, 2000);
    return () => clearTimeout(debounce);
  }, [clicked]);

  return (
    <>
      <div className="infocard__avatar" onClick={onClick}></div>
      <Proposal toggle={clicked === clickTarget} />
    </>
  );
};
export default Avatar;

import { Modal, Stepper } from "../../components";
import "./css/proposal.css";

const statements = [
  { id: 1, content: "Hello Ruth, writing this makes me so nervous..." },
  {
    id: 2,
    content:
      "Maybe by the time you are done reading, I will be brave enough to face you...",
  },
  {
    id: 3,
    content:
      "Doesn't matter if you are close or far away, I always get goosebumps when I think of you...",
  },
  {
    id: 4,
    content:
      "There are people who you meet in life, and boom you dont want to let them go.\n You even wonder how life was before you met them...",
  },
  { id: 6, content: "You are that person in my life😍!!!" },
  {
    id: 7,
    content: "It is easier said than done but: I am not here to play games...",
  },
  {
    id: 8,
    content: "The only games I want to play is those that make you happy😉",
  },
  { id: 9, content: "Will you be my girlfriend❤️???" },
];

const Proposal = ({ toggle }) => {
  return (
    <Modal
      cls="modal-proposal"
      title={false}
      body={<Stepper data={statements} />}
      externalToggle={toggle}
      footer={false}
    />
  );
};
export default Proposal;

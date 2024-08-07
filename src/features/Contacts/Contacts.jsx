import { Icon } from "../../components";
import "./css/contacts.css";

const items = [
  {
    id: "whatsapp",
    icon: "whatsapp",
    title: "Whatsapp",
    content: "+254795307188",
  },
  {
    id: "email",
    icon: "email",
    title: "Email",
    content: "ruth.mumo@mail.com",
  },
  {
    id: "mail",
    icon: "mailbox",
    title: "Mailbox",
    content: "10001-001 Tala, Kenya",
  },
  {
    id: "location",
    icon: "location",
    title: "Location",
    content: "Nairobi, Kenya",
  },
];
const Contacts = () => {
  return (
    <div className="div-contacts">
      {items.map((item) => {
        const { id, icon, title, content } = item;

        return (
          <div key={`contacts_key_${id}`}>
            <p className="p-contacts-title">
              <Icon id={icon} /> <span>{title}</span>
            </p>
            <p className="p-contacts-content">{content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Contacts;

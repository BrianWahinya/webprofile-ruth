import { Form, FormGroup, Input, Label } from "reactstrap";
import "./css/contactform.css";

const ContactForm = () => {
  return (
    <div className="div-contact-form">
      <p>
        Drop Me a Message &nbsp;
        <code>(Under development)</code>
      </p>

      <Form className="form-contact">
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
          />
          <Label className="floating-label" for="email">
            Email
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <Label className="floating-label" for="subject">
            Subject
          </Label>
        </FormGroup>
        <FormGroup>
          <Input name="message" type="textarea" placeholder="Your message" />
        </FormGroup>
      </Form>
    </div>
  );
};
export default ContactForm;

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function App() {
  return (

    <div className="App">
      <div className="section1">
        <h3 id="texte">
           Abonnez-vous à notre newsletter!
        <br/>
          Promotions exclusives
  <br/>
          Dernières nouveautés et tendances
        </h3>
      </div>
<div className="paragraphe">
 <h2 id="texte1">ABONNEMENT À LA NEWSLETTER</h2>
 <p>
Abonnez-vous à notre Newsletter et nous vous enverrons des informations sur les nouveautés, tendances et promotions exclusives chaque semaine.
</p>
</div>

      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="section2">
<hr/>
      </div>
    </div>
  );
}

export default App;

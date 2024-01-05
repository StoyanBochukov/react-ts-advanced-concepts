import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";


function App() {
  return <main>
    <Input id="name" label="Your Name" type="text" />
    <Input id="age" label="Your Age" type="number" />
    <Button el="button">A Button</Button>
    <Button el="link" href="https://google.com" target="_blank">A Link</Button>
    <Container as={Button} el="button">Click Me</Container>
    <Card title="Demo Card" actions={
      <button onClick={() => {console.log('Button is Clicked');
      }}>Demo Button.. Click Me</button>
    }>
      <div>
        <ul>
          <li>Some Text</li>
          <li>Some Text</li>
        </ul>
        <p>Some More Demo Content</p>
      </div>
    </Card>
  </main>;
}

export default App;

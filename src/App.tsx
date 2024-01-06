import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";
import Form, { type FormHandleType } from "./components/Form";
import { useRef } from "react";


function App() {

  const input = useRef<HTMLInputElement>(null)
  const customFormRef = useRef<FormHandleType>(null)
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear()
    
  }

  return <main>
    <Input id="name" label="Your Name" type="text" ref={input} />
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
    <Form onSave={handleSave} ref={customFormRef}>
      <Input type="text" label="Some Demo Text" id="demo-id" />
      <Input type="text" label="More Demo Text" id="another-demo-id" />
      <p>
        <Button el="button">Submit</Button>
      </p>
    </Form>
  </main>;
}

export default App;

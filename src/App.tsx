import Input from "./components/Input";
import Button from "./components/Button";



function App() {
  return <main>
    <Input id="name" label="Your Name" type="text" />
    <Input id="age" label="Your Age" type="number" />
    <Button el="button">A Button</Button>
    <Button el="link" href="https://google.com">A Link</Button>
  </main>;
}

export default App;

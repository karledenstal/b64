import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { useState } from "react";
import { InlineCode } from "./components/InlineCode";
import { Button } from "./components/ui/button";
import { generateRandomString, alphabet } from "oslo/crypto";

function App() {
  const [decode, setDecode] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    const data = e.currentTarget.value;
    let result: string;

    if (decode) {
      result = atob(data);
    } else {
      result = btoa(data);
    }

    setInput(data);
    setResult(result);
  };

  const onRandomize = () => {
    const randomString = generateRandomString(32, alphabet("a-z", "0-9"));
    setInput(randomString);
    setResult(btoa(randomString));
  };

  const onModeChange = () => {
    setDecode((b) => !b);
    setInput("");
    setResult("");
  };

  return (
    <div className="dark font-inter bg-zinc-950 w-screen h-screen text-zinc-300 grid place-items-center">
      <div className="w-full max-w-sm">
        <div className="flex flex-col space-y-2 mb-10">
          <Label
            htmlFor="b64input"
            className="font-bold flex items-center gap-2"
          >
            String to {decode ? "decode" : "encode"}
            <Button variant="link" onClick={onModeChange}>
              {decode ? "Encode" : "Decode"}
            </Button>
          </Label>
          <Input
            type="text"
            value={input}
            onInput={onInput}
            name="input"
            id="b64input"
          />
          {!decode && (
            <div className="flex gap-2">
              <Button onClick={onRandomize} variant="outline">
                Randomize
              </Button>
            </div>
          )}
        </div>
        {result && <InlineCode text={result} />}
      </div>
    </div>
  );
}

export default App;

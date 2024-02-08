import react, { useState } from "react";
import Joi from "joi";
import Input from "./components/input/Input";

const App = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();

  const schema = {
    name: Joi.string().min(3).max(10),
    username: Joi.string().min(5),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  };

  const onUserInput = async (e) => {
    const newState = { ...userInput, [e.target.id]: e.target.value };
    setUserInput(newState);
    const _joiInstance = Joi.object(schema);

    //
    try {
      await _joiInstance.validateAsync(newState);
      setErrors(undefined);
    } catch (e) {
      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });

      setErrors(errorsMod);
    }
  };
  console.log(userInput);
  return (
    <div>
      <form onInput={onUserInput}>
        <Input name="name" onUserInput={onUserInput} error={errors.name} />
        <Input
          name="email"
          type="email"
          onUserInput={onUserInput}
          error={errors.email}
        />
        <Input
          name="username"
          onUserInput={onUserInput}
          error={errors.username}
        />
        {/* <Input
          name="currency"
          onUserInput={onUserInput}
          error={errors.currency}
          options={["one", "two", "three", "four"]}
        />
        <Input
          name="age"
          onUserInput={onUserInput}
          error={errors.age}
          options={[1, 3, 5, 7, 8]}
        /> */}
      </form>
    </div>
  );
};

export default App;

import react, { useState } from "react";
import Joi from "joi";

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
  console.log(errors);
  return (
    <div>
      <form onInput={onUserInput}>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
          <p>{errors && errors.name}</p>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <p>{errors && errors.email}</p>
        </div>
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
          <p>{errors && errors.username}</p>
        </div>
      </form>
    </div>
  );
};

export default App;

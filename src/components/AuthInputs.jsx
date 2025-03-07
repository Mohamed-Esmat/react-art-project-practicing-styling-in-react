import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import CustomInput from './Input';

//Tagged Templates
// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-md p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 f"
    >
      <div className="flex flex-col gap-2 mb-6">
        <CustomInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        {/* <p>
          <Label
            $invalid={emailNotValid}
            // className={`label ${emailNotValid ? '$invalid' : ''}`}
          >
            Email
          </Label>
          <Input
          $invalid={emailNotValid}
          // className={emailNotValid ? '$invalid' : undefined}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p> */}
        <CustomInput
          label="password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
        {/* <p>
          <Label
            $invalid={passwordNotValid}
            // className={`label ${passwordNotValid ? '$invalid' : ''}`}
          >
            Password
          </Label>
          <Input
          // className={passwordNotValid ? 'invalid' : undefined}
          $invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

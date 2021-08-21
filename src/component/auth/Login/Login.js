import {useState , useRef} from "react";
import "./Login.css"
import Button from "../../Button/Button"
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import {useHistory} from "react-router-dom";
import {useAuthContext} from "../../../context/AuthContext"

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

function Login() { 
    const classes = useStyles();
    const { handleSubmit, control } = useForm();
    let history = useHistory();
    const{setAuth} = useAuthContext();
    const onSubmit = data => {
      console.log(data);
      const authDetails = {
          userName : data.email,
          password : data.password 
      }
      setAuth(authDetails)
      history.push("/");
    };
    const switchSignupHandler = () => {
        history.push("/Signup");
       }
    return (
        <div className="login">
            <h2>LOGIN</h2>
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
          />
        )}
        rules={{ required: 'Email required' }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: 'Password required' }}
      />
      <div className="signup__form--buttons" >
        <Button type="submit"  >
          Login
        </Button>
      </div>
    </form>
    <Button className="" clicked={switchSignupHandler}>new account</Button>
    </div>
    )
}

export default Login

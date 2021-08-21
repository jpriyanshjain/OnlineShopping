import "./Signup.css";
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

function Signup () {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  let history = useHistory();
  const{setAuth} = useAuthContext();
  const onSubmit = data => {
    const authDetails = {
        userName : data.email,
        password : data.password 
    }
    setAuth(authDetails)
    history.push("/");
  };

  return (
    <div className="signup">
        <h2>SIGNUP</h2>
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="First Name"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'First name required' }}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Last Name"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Last name required' }}
      />
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
        <Button type="submit"  color="primary">
          Signup
        </Button>
      </div>
    </form>
    </div>
  );
};

export default Signup;
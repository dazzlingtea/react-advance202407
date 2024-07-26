import classes from './Auth.module.css';
import {useDispatch} from "react-redux";
import {authActions} from "../store";

const Auth = () => {

  const dispatch = useDispatch();

  // 인증 관련 초기 상태값
  const submitHandler = e => {
    e.preventDefault();
    // 서버 fetch로 로그인 가능하면 dispatch 처리
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

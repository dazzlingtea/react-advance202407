import classes from './Header.module.css';
import {useSelector} from "react-redux";

const Header = () => {

  // 리덕스 스토어에서 isLoggedIn 상태값 가져오기
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isLoggedIn &&
        <nav>
          <ul>
            <li>
              <a href='/public'>My Products</a>
            </li>
            <li>
              <a href='/public'>My Sales</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;

import { NavBar, WingBlank } from "antd-mobile";
import { Icon } from "antd";
import { FormattedMessage } from "react-intl";
import styles from './LoginPage.css';
import BasicForm from "../components/login/BasicForm";

const LoginPage = () => {
    return (
        <div>
            <NavBar mode="dark" rightContent={[<Icon key="0" type="ellipsis" />]} >
              <FormattedMessage id="login" defaultMessage="登录" />
            </NavBar>
            <div className={styles.title}>
                <FormattedMessage id="login" defaultMessage="登录" />
            </div>
            <WingBlank size="lg">
              <div></div>
            </WingBlank>
            <BasicForm />
        </div>
    )
}

export default LoginPage;
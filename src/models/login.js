import { routerRedux } from "dva/router";
import { userLogin } from "../services/api";
import { setLocalStorage } from "../utils/helper";

export default {
    namespace: 'login',
    state: {
        user: null,
        is_login: false
    },
    effects: {
        *userLogin({ payload: value }, {call, put, select}){
            const data = yield call(userLogin, value)
            if(data){
                setLocalStorage("token", data.token, data.ttl)
                yield put(routerRedux.push('/'))
            }
        }
    },
    subscription: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, search }) => {
                if(pathname === "/"){
                    console.log("hello world")
                    routerRedux.push('/user/login')
                }
            })
        }
    }
}
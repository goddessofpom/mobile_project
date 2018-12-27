import dva from 'dva';
import './index.css';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
//import en_US from './locale/en_US';
import zh_CN from './locale/zh_CN';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

addLocaleData([...en, ...zh])

// 1. Initialize
const app = dva({
    onError(e) {
        console.log(e.message)
    }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/login').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start()
ReactDOM.render(<IntlProvider locale="zh" messages={zh_CN}><App /></IntlProvider>,document.getElementById('root'))
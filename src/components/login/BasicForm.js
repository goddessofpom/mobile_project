import { WingBlank, List, WhiteSpace } from "antd-mobile";
import { withFormik } from "formik";
import { InputWithError, SubmitButton } from "../base/FormComponents";
import { FormattedMessage } from "react-intl";
import { connect } from "dva";

const InnerForm = ({
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    isSubmitting
}) => (
    <form onSubmit={handleSubmit}>
      <WingBlank>
          <List>
              <InputWithError
                  onChange={(value) => setFieldValue('username', value)}
                  onBlur={() => {setFieldTouched("username", true)}}
                  value={values.username}
                  touched={touched.username}
                  errors={errors.username}
                  label="username"
              />
              <WhiteSpace size="lg" />
              <InputWithError
                  onChange={(value) => setFieldValue('password', value)}
                  onBlur={() => {setFieldTouched("password", true)}}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  label="password"
                  type="password"
              />
              <SubmitButton disabled={isSubmitting}>
                  <FormattedMessage id="login" defaultMessage="login" />
              </SubmitButton>
          </List>
      </WingBlank>
    </form>
)


const LoginForm = withFormik({
    mapPropsToValues: props => ({username: '', password: ''}),
    validate: (values, props) => {
        const errors = {};
        if(!values.username){
            errors.username = "Required";
        }else if (!values.password){
            errors.password = "Required";
        }
        return errors;
    },
    handleSubmit: (
        values,
        {
            props,
            setSubmitting,
            setErrors
        }
    ) => {
        const { dispatch } = props;
        dispatch({
            type: "login/userLogin",
            payload: values
        })
        setSubmitting(false)
    }
})(InnerForm);


function mapStateToProps(state){
    return {...state}
}

export default connect(mapStateToProps)(LoginForm);
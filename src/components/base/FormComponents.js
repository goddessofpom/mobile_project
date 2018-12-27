import React from "react";
import { InputItem, List, Radio, Checkbox, Picker, DatePicker, TextareaItem } from "antd-mobile";
import { FormattedMessage } from "react-intl";
import styles from "./FormComponents.css";

const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;

const StandardCheckboxList = props => (
    <List renderHeader={() => props.title}>
      {props.data.map(item => (
          <CheckboxItem
              key={item.label + item.value}
              onChange={() => props.onChange(item.value)}
          >
              <FormattedMessage id={item.label} defaultMessage={item.label} />
          </CheckboxItem>
      ))}
    </List>
);

const StandardRadioList = props => (
    <List renderHeader={() => props.title}>
      {props.data.map(item => (
          <RadioItem 
              key={item.label + item.value}
              onChange={() => props.onChange(item.value)}
              checked={props.value === item.value}
          >
              <FormattedMessage id={item.label} defaultMessage={item.label} />
          </RadioItem>
      ))}
    </List>
);

const StandardInputItem = props => (
    <InputItem
        type={props.type}
        name={props.name}
        onChange={value => props.onChange(value)}
        onBlur={props.onBlur}
        value={props.value}
    >
    <FormattedMessage
        id={props.label}
        defaultMessage={props.label}
     />
    </InputItem>
);

const StandardPicker = props => (
    <Picker
        value={props.value}
        data={props.data}
        cols={1}
        className={props.className}
        onOk={val => props.onOk(val)}
    >
        <List.Item arrow="horizontal">
            <FormattedMessage id={props.label} defaultMessage={props.label} />
        </List.Item>
    </Picker>
);

const StandardDatePicker = props => (
    <DatePicker
        mode={props.mode}
        title={props.title}
        extra={props.extra}
        value={props.value}
        minDate={props.minDate}
        maxDate={props.maxDate}
        onChange={props.onChange}
        onOk={props.onOk}
        onDismiss={props.onDismiss}
    >
        <List.Item arrow="horizontal">
            <FormattedMessage id={props.label} defaultMessage={props.label} />
        </List.Item>
    </DatePicker>
);

const StandardTextArea = props => (
    <TextareaItem
        title={props.title}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        autoHeight
        count={props.count}
     />
);

const SubmitButton = props => (
    <button className={styles.submit} type="submit" disabled={props.disabled}>
        {props.children}
    </button>
)

const ErrorItem = props =>
    props.touched && props.errors ? (
        <List.Item className={styles.erroritem}>
            <span className={styles.errormessage} >* {props.errors}</span>
        </List.Item>
    ) : null;

function HOCErrorInItem(NormalComponent, ErrorComponent) {
    return class HOCErrorFormItem extends React.Component {
        render(){
            return (
            <div>
            <NormalComponent {...this.props} />
            <ErrorComponent
                touched={this.props.touched}
                errors={this.props.errors}
            />
            </div>
        )}
    }
}

const CheckboxWithError = HOCErrorInItem(StandardCheckboxList, ErrorItem)
const RadioWithError = HOCErrorInItem(StandardRadioList, ErrorItem)
const PickerWithError = HOCErrorInItem(StandardPicker, ErrorItem)
const InputWithError = HOCErrorInItem(StandardInputItem, ErrorItem)
const DatePickerWithError = HOCErrorInItem(StandardDatePicker, ErrorItem)
const TextAreaWithError = HOCErrorInItem(StandardTextArea, ErrorItem)

export {
    CheckboxWithError,
    RadioWithError,
    PickerWithError,
    InputWithError,
    DatePickerWithError,
    TextAreaWithError,
    SubmitButton
}

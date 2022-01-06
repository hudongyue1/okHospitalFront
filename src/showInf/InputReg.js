import { Form, Input, InputNumber, Button, DatePicker  } from 'antd'
import moment from "moment"
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */




const InputReg = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onChooseDoc = () => {
    props.setPage(4);
  }
  const handleValChange = (changedValues, allValues) => {
    console.log("changedValues:")
    console.log(changedValues)
    console.log(allValues)
    let inf = props.upperState.registrationInf;
    

    inf["regiseterTime"] = changedValues.user.orderTime.format("YYYY-MM-DD HH:mm:ss");
    console.log("inf");
    console.log(inf);
    props.upperSetState();
  } 
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} 
        onValuesChange={handleValChange}>
      <Form.Item
        name={['user', 'patient']}
        label="病人ID"
        initialValue = {props.upperState.patientID}
      >
        <Input disabled = 'true' />
      </Form.Item>
      <Form.Item
        name={['user', 'doctor']}
        label="所选医生"
        initialValue = {props.upperState.isSolid ? props.upperState.subscriptionInf.subscribeChoice: props.upperState.registrationInf.registerChoice}
      >
        <Input disabled = {"true"}/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" onClick = {onChooseDoc} >
          点击选择医生
        </Button>
      </Form.Item>
      <Form.Item
        name={['user', 'orderTime']}
        label="预约时间"
      >
        <DatePicker disabled = {props.upperState.isSolid} showTime  format = {"YYYY-MM-DD HH:mm:ss"} minuteStep={30}
        defaultValue ={moment(props.upperState.isSolid ? props.upperState.subscriptionInf.subscribeTime : "2022-01-06 11:30:00")}/>
    </Form.Item>
    </Form>
  );
};

export default InputReg;

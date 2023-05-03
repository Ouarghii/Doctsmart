import React from 'react'
import Layout from '../Layout'
import './apply.css'
import {Col, Form, Input, Row, TimePicker, message,Badge} from'antd'
import { useSelector,useDispatch } from 'react-redux'
import { Navigate, useHistory } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/alertSlice'
import axios from 'axios'

const ApplyDoctor = () => {
  const {doctor}=useSelector(state=>state.doctor)
  const dispatch=useDispatch()
  const history=useHistory()
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      if (!doctor) {
        console.log(doctor)
        message.error("Doctor information not available");
        return;
      }
      const res = await axios.post(
        "/apply-doctor",
        { ...values, doctorId: doctor._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data);
        history.push("/doctorapp");
        return null;
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  console.log(doctor); 
  return (
    <Layout>
        <h1 className='text-center'>Apply Doctor</h1>
        <Form  onFinish={handleFinish} className="m-10">
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
        
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
              style={{marginLeft:'15px'}}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col>
        </Row>
        <h4 >Professional Details :</h4>
        <Row gutter={20}>
        
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fees Per Cunsaltation"
              name="feesPerCunsaltation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary formmm-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  )
}

export default ApplyDoctor
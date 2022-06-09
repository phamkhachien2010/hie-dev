import { Button, message, Upload, Form, Input } from 'antd'
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styleProfile from './profile.module.css'
import { UploadOutlined } from '@ant-design/icons';
import { DOMAIN, TOKEN } from '../../util/setting/config';
import _ from 'lodash';



export default function Profile() {

    const { userLogin } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            userName: userLogin.userName,
            oldPassword: '',
            newPassword: '',
            avatar: ''
        },
        onSubmit: values => {
            let { avatar } = values;
            const avatarDrop = _.drop(avatar, 12)
            avatar = _.join(avatarDrop, '')
            console.log({ avatar });
        },
    });

    const domainUploadAvatar = `${DOMAIN}/users/upload-avatar`

    const props = {
        name: 'avatar',

        // action: domainUploadAvatar,
        // headers: {
        //     token: TOKEN,
        // },
        onChange(info) {
            console.log(info);
            // if (info.file.status !== 'uploading') {
            //     console.log(info.file, info.fileList);
            // }

            // if (info.file.status === 'done') {
            //     message.success(`${info.file.name} file uploaded successfully`);
            // } else if (info.file.status === 'error') {
            //     message.error(`${info.file.name} file upload failed.`);
            // }
        },
    };

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
            lg: {
                span: 4
            }
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
            lg: {
                span: 18
            }
        },
    };

    
    const avatarImgUrl = userLogin.avatar;
    console.log(avatarImgUrl);
    return (
        <div className='flex flex-col justify-center py-5'>
            <div className='text-center mb-5'>
                <div>
                    {/* <img src={userLogin.avatar} className={`rounded-full ${styleProfile.hie_logo}`} alt="logo" /> */}
                </div>
            </div>
            <div className={`w-3/4 lg:w-1/2 m-auto ${styleProfile.profile}`} style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <h1 className='text-white font-bold text-center text-2xl mb-3'>Change profile</h1>

                <Form
                    onSubmitCapture={formik.handleSubmit}
                    {...formItemLayout}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Username"

                    >
                        <Input onChange={formik.handleChange} name='userName' value={formik.values.userName} placeholder='Input your userName' />
                    </Form.Item>

                    <Form.Item
                        label="Old Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your old password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={formik.handleChange} value={formik.values.oldPassword} name='oldPassword' placeholder='Input your old password' />
                    </Form.Item>

                    <Form.Item
                        label="New Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your new password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={formik.handleChange} value={formik.values.newPassword} name='newPassword' placeholder='Input your new password' />
                    </Form.Item>

                    <Form.Item
                        label="Upload avatar"
                    >
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                        {/* <input name='avatar' onChange={formik.handleChange} type="file" /> */}
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                        <Button className='ml-3' type="danger" htmlType="button">
                            Delete account
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

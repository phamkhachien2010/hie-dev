import { Button, Form, Input, Popconfirm } from 'antd'
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styleProfile from './profile.module.css'
import { DELETE_ACCOUNT_API, EDIT_USER_CLIENT_API, UPLOAD_AVATAR } from '../../redux/constant/ConstantSaga';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';



export default function Profile() {

    const { userLogin } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();
    const [changeAvatar, setChangeAvatar] = useState('hidden')
    const [changeBtnAvatar, setChangeBtnAvatar] = useState('block')
    const { t } = useTranslation()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            userName: userLogin.userName,
            oldPassword: '',
            newPassword: '',
        },
        onSubmit: values => {
            dispatch({
                type: EDIT_USER_CLIENT_API,
                user: values
            })
        },
    });

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

    const formikavatar = useFormik({
        initialValues: {
            avatar: {}
        },
        onSubmit: values => {
            const formData = new FormData();
            formData.append('avatar', values.avatar, values.avatar.name)
            dispatch({
                type: UPLOAD_AVATAR,
                avatar: formData
            })
        },
    });

    const handleChangeFile = (e) => {
        let file = e.target.files[0]
        formikavatar.setFieldValue('avatar', file)
        console.log(file);
    }


    return (
        <div className='flex flex-col justify-center py-5'>
            <div className='text-center mb-5'>
                <div className={styleProfile.avatar_overlay}>
                    <img src={userLogin.avatar} className={`rounded-full ${styleProfile.hie_logo}`} alt="logo" />
                    <button className={`bg-rose-200 p-2 block rounded-lg mt-2 w-100 ${changeBtnAvatar}`} onClick={() => {
                        setChangeAvatar('block');
                        setChangeBtnAvatar('hidden')
                    }}>{t('change avatar')}</button>
                    <form onSubmitCapture={formikavatar.handleSubmit} className={changeAvatar} method="post" encType="multipart/form-data">
                        <input type="file" onChange={handleChangeFile} name="avatar" />
                        <div className='w-2/5 ml-auto'>
                            <button className='bg-rose-200 p-2 block rounded-lg mt-2 w-100' type='submit'>{t('change')}</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className={`w-3/4 lg:w-1/2 m-auto ${styleProfile.profile}`} style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <h1 className='text-white font-bold text-center text-2xl mb-3'>{t('change profile')}</h1>

                <Form
                    onSubmitCapture={formik.handleSubmit}
                    {...formItemLayout}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label={t('userName')}

                    >
                        <Input onChange={formik.handleChange} name='userName' value={formik.values.userName} placeholder={t('input userName')} />
                    </Form.Item>

                    <Form.Item
                        label={t('old password')}
                        rules={[
                            {
                                required: true,
                                message: t('old pass valid'),
                            },
                        ]}
                    >
                        <Input.Password onChange={formik.handleChange} value={formik.values.oldPassword} name='oldPassword' placeholder={t('input old password')} />
                    </Form.Item>

                    <Form.Item
                        label={t('new password')}
                        rules={[
                            {
                                required: true,
                                message: t('new pass valid'),
                            },
                        ]}
                    >
                        <Input.Password onChange={formik.handleChange} value={formik.values.newPassword} name='newPassword' placeholder={t('input new password')} />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 16,
                            span: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            {t('send')}
                        </Button>
                        <Popconfirm
                            title={t('notifi delete acc')}
                            onConfirm={() => {
                                dispatch({
                                    type: DELETE_ACCOUNT_API,
                                    id: userLogin.id
                                })
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button className='ml-3' type="danger" htmlType="button">
                                {t('delete acc')}
                            </Button>
                        </Popconfirm>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

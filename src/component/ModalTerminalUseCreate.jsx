import React from 'react';
import { Button, Modal, Checkbox, Form, Input  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL_TEMINAL_USE } from '../redux/constant/ConstantReducer';


export default function ModalTerminalUseCreate() {

    const { showModalTerminal } = useSelector(state => state.TerminalInUseReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch({
            type: CLOSE_MODAL_TEMINAL_USE
        })
    };

    const handleCancel = () => {
        dispatch({
            type: CLOSE_MODAL_TEMINAL_USE
        })
    };

    return (
        <>
            <Modal title="Basic Modal" visible={showModalTerminal} onOk={handleOk} onCancel={handleCancel}>
                <form>

                </form>
            </Modal>
        </>
    )
}

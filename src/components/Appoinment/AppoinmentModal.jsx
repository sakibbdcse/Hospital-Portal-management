import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentModal = ({ modalIsOpen, closeModal, appointmentData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <IoMdCloseCircle onClick={closeModal} className='close-icon' />
                <h5 className='cm-color'>{appointmentData}</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group p-2">
                        <input type='text' {...register('name', { required: true })} placeholder='Your name' className="input w-full input-bordered " />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type='text' {...register('number', { required: true })} placeholder='Your number' className="input w-full input-bordered " />
                        {errors.number && <span className="text-danger">Number is required</span>}
                    </div>
                    <div className="form-group">
                        <input type='email' {...register('email', { required: true })} placeholder='Your Email' className="input w-full input-bordered " />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className='form-control' {...register('gender', { required: true })}>
                                <option disabled={true} value="not-selected">Not selected</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.gender && <span className="text-danger">Gender is required</span>}
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
}

export default AppointmentModal;

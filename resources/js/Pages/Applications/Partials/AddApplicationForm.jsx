import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import TextAreaInput from '@/Components/TextAreaInput';
import PrimaryButton from '@/Components/PrimaryButton';

const AddApplicationForm = () => {
    const { data, setData, post, reset } = useForm({
        company_name: '',
        position: '',
        referred_by: '-',
        applied_for_position: '-',
        interview_called: '-',
        application_message: '-',
        vacancy_link: ''
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to the applications.store route
        post(route('applications.store'), {
            onSuccess: () => reset() // Reset form after submission
        });
    };

    return (
        <div className="card mt-6">
            <div className="card-header font-bold">Application Details</div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className='mt-6 space-y-6'>
                    {/* Company Name */}
                    <div className="grid grid-cols-1 grid-rows-5 gap-6 sm:grid-cols-6 items-center">
                        <div>
                            <InputLabel htmlFor="company_name" value="Company Name" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="company_name"
                                type="text"
                                name="company_name"
                                value={data.company_name}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="position" value="Position" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="position"
                                type="text"
                                name="position"
                                value={data.position}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="referred_by" value="Referred By" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="referred_by"
                                type="text"
                                name="referred_by"
                                value={data.referred_by}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="applied_for_position" value="Applied For Position" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="applied_for_position"
                                type="text"
                                name="applied_for_position"
                                value={data.applied_for_position}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="interview_called" value="Interview Called" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="interview_called"
                                type="text"
                                name="interview_called"
                                value={data.interview_called}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="row-start-4">
                            <InputLabel htmlFor="application_message" value="Application Message" />
                        </div>
                        <div className="col-span-5">
                            <TextAreaInput
                                id="application_message"
                                type="text"
                                name="application_message"
                                value={data.application_message}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="row-start-5">
                            <InputLabel htmlFor="vacancy_link" value="Vacancy Link" />
                        </div>
                        <div className="col-span-5 row-start-5">
                            <TextInput
                                id="vacancy_link"
                                type="text"
                                name="vacancy_link"
                                value={data.vacancy_link}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <PrimaryButton type="submit">
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddApplicationForm;

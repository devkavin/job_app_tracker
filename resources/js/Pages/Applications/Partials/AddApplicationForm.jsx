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
        <div className="card mt-4">
            <div className="card-header font-bold">Application Details Form</div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className='mt-6 space-y-6'>
                    {/* Company Name */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                        <InputLabel
                            htmlFor="company_name"
                            value="Company Name"
                        />
                        <TextInput
                            label="Company Name"
                            id="company_name"
                            name="company_name"
                            value={data.company_name}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Position */}
                        <InputLabel
                            htmlFor="position"
                            value="Position"
                        />
                        <TextInput
                            label="Position"
                            id="position"
                            name="position"
                            value={data.position}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Referred By */}
                        <InputLabel
                            htmlFor="referred_by"
                            value="Referred By"
                        />
                        <TextInput
                            label="Referred By"
                            id="referred_by"
                            name="referred_by"
                            value={data.referred_by}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Applied For Position */}
                        <InputLabel
                            htmlFor="applied_for_position"
                            value="Applied For Position"
                        />
                        <TextInput
                            label="Applied For Position"
                            id="applied_for_position"
                            name="applied_for_position"
                            value={data.applied_for_position}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Interview Called */}
                        <InputLabel
                            htmlFor="interview_called"
                            value="Interview Called"
                        />
                        <TextInput
                            label="Interview Called"
                            id="interview_called"
                            name="interview_called"
                            value={data.interview_called}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Application Message */}
                        <InputLabel
                            htmlFor="application_message"
                            value="Application Message"
                        />

                        <TextAreaInput
                            label="Application Message"
                            id="application_message"
                            name="application_message"
                            value={data.application_message}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Vacancy Link */}
                        <InputLabel
                            htmlFor="vacancy_link"
                            value="Vacancy Link"
                        />

                        <TextInput
                            label="Vacancy Link"
                            id="vacancy_link"
                            name="vacancy_link"
                            value={data.vacancy_link}
                            onChange={handleChange}
                            required={true}
                        />
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

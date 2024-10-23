import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import TextAreaInput from '@/Components/TextAreaInput';
import PrimaryButton from '@/Components/PrimaryButton';

const AddStatusesForm = () => {
    const { data, setData, post, reset } = useForm({
        status_key: data.status_key,
        status: data.status_value,
        status_type: data.status_type,
        status_description: data.status_description,
        status_color: data.status_color
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to the tatuses.store route
        post(route('statuses.store'), {
            onSuccess: () => reset() // Reset form after submission
        });
    };

    return (
        <div className="card mt-6">
            <div className="card-header font-bold">Status Details</div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className='mt-6 space-y-6'>
                    {/* Company Name */}
                    <div className="grid grid-cols-1 grid-rows-5 gap-6 sm:grid-cols-6 items-center">
                        <div>
                            <InputLabel htmlFor="status_key" value="Status Key" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="status_key"
                                type="text"
                                name="status_key"
                                value={data.status_key}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="status" value="Status" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="status"
                                type="text"
                                name="status"
                                value={data.status}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="status_type" value="Status Type" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="status_type"
                                type="text"
                                name="status_type"
                                value={data.status_type}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="status_description" value="Status Description" />
                        </div>
                        <div className="col-span-2">
                            <TextAreaInput
                                id="status_description"
                                name="status_description"
                                value={data.status_description}
                                className="mt-1 block w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="status_color" value="Status Color" />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                id="status_color"
                                type="text"
                                name="status_color"
                                value={data.status_color}
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

export default AddStatusesForm;

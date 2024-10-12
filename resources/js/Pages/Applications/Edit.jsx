import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import AddApplicationForm from "./Partials/AddApplicationForm";

export default function Edit({ auth, application }) {
    const { data, setData, patch, processing, errors } = useForm({
        company_name: application.company_name,
        position: application.position,
        referred_by: application.referred_by,
        responded_to_email: application.responded_to_email,
        applied_for_position: application.applied_for_position,
        interview_called: application.interview_called,
        date_of_interview: application.date_of_interview,
        application_message: application.application_message,
        vacancy_link: application.vacancy_link
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('applications.update', application.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Application
                </h2>
            }
        >

            <Head title="Edit Application" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                        <form
                            // onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white"
                        >
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
                            <div className="mt-6">
                                <PrimaryButton
                                    onClick={handleSubmit}
                                    disabled={processing}
                                >
                                    {processing ? 'Saving...' : 'Save'}
                                </PrimaryButton>
                            </div>
                            <AddApplicationForm data={data} setData={setData} />
                        </form>

                    </div>
                </div>

            </div >

        </AuthenticatedLayout >
    )

}

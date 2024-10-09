import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ auth, application }) {
    const { data, setData, post, processing, errors } = useForm({
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
        post(route('applications.update', application.id));
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
                            <div>
                                <InputLabel htmlFor="company_name" value="Company Name" />
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
                        </form>
                    </div>
                </div>

            </div>

        </AuthenticatedLayout>
    )

}

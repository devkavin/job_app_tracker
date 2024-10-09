import React, { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AddApplicationForm from './Partials/AddApplicationForm'; // Import the form component
import ApplicationsTable from './Partials/ApplicationsTable';

export default function Index({ auth, applications, success, errors }) {
    const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

    // Function to toggle the form
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    All Applications
                </h2>
            }
        >
            <Head title="All Applications" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded relative">
                            <strong className="font-bold">Success! </strong>
                            <span className="block sm:inline">
                                {success}
                            </span>
                        </div>
                    )}

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <PrimaryButton
                                onClick={toggleFormVisibility} // Toggle form on click
                            >
                                {isFormVisible ? 'Close Form' : 'Add Application'}
                            </PrimaryButton>

                            {/* Conditionally show the form if isFormVisible is true */}
                            {isFormVisible && <AddApplicationForm />}
                        </div>
                    </div>
                    <ApplicationsTable applications={applications} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

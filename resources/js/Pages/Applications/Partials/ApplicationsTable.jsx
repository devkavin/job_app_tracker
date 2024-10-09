
import Pagination from "@/Components/Pagination";
import { Link, router } from "@inertiajs/react";

export default function ApplicationsTable({ applications, queryParams = null }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route('applications.index'), queryParams);
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value);
    }

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc';
            } else {
                queryParams.sort_direction = 'asc';
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        router.get(route('applications.index'), queryParams);
    }

    return (
        <>
            <div className="overflow-auto bg-white shadow-sm sm:rounded-lg mt-6">
                <div className="py-6 text-gray-900">
                    {applications.length === 0 ? (
                        <p>No applications found.</p>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-9 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Company Name
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Position
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Reffered By
                                    </th>
                                    <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Responded To Email
                                    </th>
                                    <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Applied
                                    </th>
                                    <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Interview Called
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Date Of Interview
                                    </th>
                                    <th className="px-15 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Application Message
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Vacancy Link
                                    </th>
                                    <th className="px-3 py-3 bg-gray-50 text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {applications.data.map((application) => (
                                    <tr key={application.id}>
                                        <td className="px-9 py-4 whitespace-no-wrap">
                                            {application.company_name.length > 20 ? application.company_name.slice(0, 20) + '...' : application.company_name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            {application.position}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            {application.referred_by}
                                        </td>
                                        <td className="px-3 py-4 whitespace-no-wrap">
                                            {application.responded_to_email}
                                        </td>
                                        <td className="px-3 py-4 whitespace-no-wrap">
                                            {application.applied_for_position}
                                        </td>
                                        <td className="px-3 py-4 whitespace-no-wrap">
                                            {application.interview_called}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            {application.date_of_interview}
                                        </td>
                                        <td className="px-15 py-4 whitespace-no-wrap">
                                            {application.application_message != '-' ? application.application_message.slice(0, 20) + '...' : application.application_message}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <a
                                                href={application.vacancy_link}
                                                className="text-indigo-600 hover:text-indigo-900"

                                            >
                                                {application.vacancy_link ? application.vacancy_link.slice(0, 20) + '...' : ''}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <Link
                                                href={route(
                                                    'applications.edit',
                                                    application.id
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="10" className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex justify-between">
                                            <div>
                                                <span className="text-sm text-gray-700">
                                                    Showing {applications.from} to {applications.to} of {applications.total} results
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-sm text-right text-gray-700">
                                                    <Pagination links={applications.links} />
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    )}
                </div>
            </div >
        </>
    )
}

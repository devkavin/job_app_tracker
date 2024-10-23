
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Link, router } from "@inertiajs/react";

export default function StatusesTable({ statuses, queryParams = null }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route('statuses.index'), queryParams);
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
        router.get(route('statuses.index'), queryParams);
    }

    return (
        <>
            <div className="overflow-auto bg-white shadow-sm sm:rounded-lg mt-6">
                <div className="py-6 text-gray-900">
                    <div className="flex justify-left mb-6 ml-6">
                        <div className="flex">
                            <form
                                className="flex"
                            >
                                <TextInput
                                    id="company_name"
                                    type="text"
                                    name="company_name"
                                    className="mt-1 block w-full"
                                    placeholder="Search Company Name"
                                    onKeyPress={(e) => onKeyPress('company_name', e)}
                                />
                                <PrimaryButton
                                    onClick={() => searchFieldChanged('search', document.getElementById('search').value)}
                                    className="ml-2"
                                >
                                    Search
                                </PrimaryButton>
                                <SecondaryButton
                                    onClick={() => searchFieldChanged('search', '')}
                                    className="ml-2"
                                >
                                    Reset
                                </SecondaryButton>

                            </form>
                        </div>
                    </div>
                    {statuses.length === 0 ? (
                        <p>No Interview Statuses found.</p>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-9 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status Key
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Description
                                    </th>
                                    {/* Count of interviews with this status */}
                                    {/* <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Count
                                    </th> */}
                                    <th className="px-3 py-3 bg-gray-50 text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {statuses.data.map((statuses) => (
                                    <tr key={statuses.id}>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            {statuses.status_key}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            {statuses.status}
                                        </td>
                                        <td className="px-3 py-4 whitespace-no-wrap">
                                            {statuses.description}
                                        </td>
                                        {/* Count */}
                                        {/* <td className="px-3 py-4 whitespace-no-wrap">
                                            {statuses.description}
                                        </td> */}
                                        <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <Link
                                                href={route(
                                                    'statuses.edit',
                                                    statuses.id
                                                )}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                href={route(
                                                    'statuses.destroy',
                                                    statuses.id
                                                )}
                                                method="delete"
                                                as="button"
                                                className="text-red-600 hover:text-red-900 ml-4"
                                            >
                                                Delete
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
                                                    Showing {statuses.from} to {statuses.to} of {statuses.total} results
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-sm text-right text-gray-700">
                                                    <Pagination links={statuses.links} />
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

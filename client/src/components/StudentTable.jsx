import React from 'react';

const StudentTable = () => {
    const students = [
        { 
            id: 1, 
            name: 'Satvik', 
            std: '3', 
            dob: '2004-01-12' , 
            gender: 'male'
        },
        { id: 2, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 3, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 4, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 5, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 6, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 7, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 8, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 9, name: 'Satvik', std: '3', dob: '2004-01-12', gender: 'male' },
        { id: 10, name: 'Satvik', std: '3', dob: '2005-01-12' , gender: 'male'},
        { id: 11, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
        { id: 12, name: 'Satvik', std: '3', dob: '2004-01-12' , gender: 'male'},
    ];

    function age(date) {
        let birthDate = new Date(date);
        let today = new Date();
        let yearsDifference = today.getFullYear() - birthDate.getFullYear();
        if (
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ) {
            yearsDifference--;
        }
        
        return yearsDifference;
    }

    return (
        <div className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Students</h2>
                <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Student ID</th>
                                <th className="py-3 px-6 text-left">Student Name</th>
                                <th className="py-3 px-6 text-left">Class</th>
                                <th className="py-3 px-6 text-left">Age</th>
                                <th className="py-3 px-6 text-left">Gender</th>
                                <th className="py-3 px-10"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {students.map((student, index) => (
                                <tr key={`${student.id}-${index}`} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{student.id}</td>
                                    <td className="py-3 px-6 text-left">{student.name}</td>
                                    <td className="py-3 px-6 text-left">{student.std}</td>
                                    <td className="py-3 px-6 text-left">{age(student.dob)}</td>
                                    <td className="py-3 px-6 text-left">{student.gender}</td>
                                    <td className="py-3 px-6 border-black">
                                        <button className="rounded-full">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentTable;

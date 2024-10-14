import React, { useState } from 'react';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const Surveys = () => {
  const [surveys, setSurveys] = useState([
    { id: 1, title: 'User Satisfaction Survey', responses: 150, status: 'Active' },
    { id: 2, title: 'Product Feedback Survey', responses: 75, status: 'Draft' },
    { id: 3, title: 'Market Research Survey', responses: 200, status: 'Completed' },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Surveys</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusCircle size={20} className="mr-2" />
          Create New Survey
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responses</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {surveys.map((survey) => (
              <tr key={survey.id}>
                <td className="px-6 py-4 whitespace-nowrap">{survey.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{survey.responses}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    survey.status === 'Active' ? 'bg-green-100 text-green-800' :
                    survey.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {survey.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Surveys;
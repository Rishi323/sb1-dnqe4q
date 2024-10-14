import React, { useState } from 'react';
import { PlusCircle, Calendar, Clock } from 'lucide-react';

const Interviews = () => {
  const [interviews, setInterviews] = useState([
    { id: 1, participant: 'John Doe', date: '2023-04-15', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, participant: 'Jane Smith', date: '2023-04-16', time: '2:00 PM', status: 'Completed' },
    { id: 3, participant: 'Bob Johnson', date: '2023-04-17', time: '11:30 AM', status: 'Scheduled' },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Interviews</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusCircle size={20} className="mr-2" />
          Schedule Interview
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviews.map((interview) => (
          <div key={interview.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{interview.participant}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar size={18} className="mr-2" />
              <span>{interview.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Clock size={18} className="mr-2" />
              <span>{interview.time}</span>
            </div>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              interview.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            }`}>
              {interview.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;
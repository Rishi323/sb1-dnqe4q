import React, { useState } from 'react';
import { PlusCircle, Users, MapPin, Calendar } from 'lucide-react';

const FocusGroups = () => {
  const [focusGroups, setFocusGroups] = useState([
    { id: 1, title: 'Product Feedback Session', participants: 8, location: 'Conference Room A', date: '2023-04-20' },
    { id: 2, title: 'User Experience Workshop', participants: 12, location: 'Virtual Meeting', date: '2023-04-25' },
    { id: 3, title: 'Market Research Group', participants: 10, location: 'Conference Room B', date: '2023-05-02' },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Focus Groups</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusCircle size={20} className="mr-2" />
          Create Focus Group
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusGroups.map((group) => (
          <div key={group.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Users size={18} className="mr-2" />
              <span>{group.participants} participants</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>{group.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={18} className="mr-2" />
              <span>{group.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusGroups;
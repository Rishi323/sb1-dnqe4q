import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const data = [
    { name: 'Survey 1', responses: 150 },
    { name: 'Survey 2', responses: 75 },
    { name: 'Survey 3', responses: 200 },
    { name: 'Interview Set 1', participants: 10 },
    { name: 'Interview Set 2', participants: 15 },
    { name: 'Focus Group 1', participants: 8 },
    { name: 'Focus Group 2', participants: 12 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Analytics</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Research Participation Overview</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="responses" fill="#8884d8" name="Survey Responses" />
            <Bar dataKey="participants" fill="#82ca9d" name="Interview/Focus Group Participants" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Survey 3 received the highest number of responses (200)</li>
            <li>Interview Set 2 had the most participants (15)</li>
            <li>Focus groups have consistently lower participation numbers</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Analyze the success factors of Survey 3 for future surveys</li>
            <li>Consider increasing the number of interview sets</li>
            <li>Investigate ways to boost focus group participation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
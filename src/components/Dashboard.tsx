import React from 'react';
import { Clipboard, Users, MessageSquare, BarChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Research Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Active Surveys" count={3} icon={<Users size={24} />} />
        <DashboardCard title="Scheduled Interviews" count={5} icon={<MessageSquare size={24} />} />
        <DashboardCard title="Upcoming Focus Groups" count={2} icon={<Users size={24} />} />
        <DashboardCard title="Reports Generated" count={10} icon={<BarChart size={24} />} />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <ul className="bg-white rounded-lg shadow divide-y">
          <ActivityItem title="Survey 'User Satisfaction' completed" time="2 hours ago" />
          <ActivityItem title="New interview scheduled with John Doe" time="5 hours ago" />
          <ActivityItem title="Focus group 'Product Feedback' results analyzed" time="1 day ago" />
          <ActivityItem title="Monthly research report generated" time="2 days ago" />
        </ul>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, count, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-1">{count}</p>
      </div>
      <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
    </div>
  </div>
);

const ActivityItem = ({ title, time }) => (
  <li className="px-4 py-3">
    <p className="text-sm font-medium text-gray-900">{title}</p>
    <p className="text-sm text-gray-500">{time}</p>
  </li>
);

export default Dashboard;
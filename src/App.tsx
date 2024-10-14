import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Clipboard, Users, MessageSquare, BarChart } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Surveys from './components/Surveys';
import Interviews from './components/Interviews';
import FocusGroups from './components/FocusGroups';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <nav className="bg-white w-64 p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Research Toolkit</h1>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Clipboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/surveys" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Users size={20} />
                <span>Surveys</span>
              </Link>
            </li>
            <li>
              <Link to="/interviews" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <MessageSquare size={20} />
                <span>Interviews</span>
              </Link>
            </li>
            <li>
              <Link to="/focus-groups" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Users size={20} />
                <span>Focus Groups</span>
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <BarChart size={20} />
                <span>Analytics</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/focus-groups" element={<FocusGroups />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
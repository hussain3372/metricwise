// components/Tabs.js
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div>
      <div className=" text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-col text-start items-start justify-start -mb-px">
          <li className="me-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`inline-block p-4 border-b-2 ${
                activeTab === 'profile'
                  ? 'text-blue-600 border-blue-600'
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              } rounded-t-lg`}
            >
              Profile
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`inline-block p-4 border-b-2 ${
                activeTab === 'dashboard'
                  ? 'text-blue-600 border-blue-600'
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              } rounded-t-lg`}
              aria-current="page"
            >
              Dashboard
            </button>
          </li>
          
        </ul>
      </div>

      <div className="p-4">
        {activeTab === 'profile' && <div>Profile content</div>}
        {activeTab === 'dashboard' && <div>Dashboard content</div>}
      </div>
    </div>
  );
};

export default Tabs;

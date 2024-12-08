// Add the "use client" directive to specify that this is a client-side component
'use client';

import React, { useState } from 'react';

export default function Blog() {
  const [activeTab, setActiveTab] = useState<'home' | 'settings' | 'profile'>('home'); // type for the activeTab state

  const tabData = {
    home: {
      title: "Home",
      content: "Welcome to the home page. Here is some introductory content about the website.",
      imageUrl: "https://readymadeui.com/Imagination.webp"
    },
    settings: {
      title: "Settings",
      content: "Here you can manage your settings. Customize your preferences here.",
      imageUrl: "https://readymadeui.com/Imagination.webp" // Replace with an actual image URL
    },
    profile: {
      title: "Profile",
      content: "View and edit your profile information here.",
      imageUrl: "https://readymadeui.com/Imagination.webp"// Replace with an actual image URL
    }
  };

  // Define the type of 'tab' parameter
  const handleTabClick = (tab: 'home' | 'settings' | 'profile') => {
    setActiveTab(tab); // Update the active tab
  };

  return (
    <>
      <div className="font-sans p-4">
        {/* Tab buttons */}
        <ul className="flex w-max border-b space-x-4 overflow-hidden">
          <li
            id="homeTab"
            className={`tab text-sm py-3 px-6 cursor-pointer rounded-tl-2xl rounded-tr-2xl ${activeTab === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </li>
          <li
            id="settingTab"
            className={`tab text-sm py-3 px-6 cursor-pointer rounded-tl-2xl rounded-tr-2xl ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabClick('settings')}
          >
            Settings
          </li>
          <li
            id="profileTab"
            className={`tab text-sm py-3 px-6 cursor-pointer rounded-tl-2xl rounded-tr-2xl ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabClick('profile')}
          >
            Profile
          </li>
        </ul>

        {/* Content section based on active tab */}
        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src={tabData[activeTab].imageUrl} className="w-full" alt={tabData[activeTab].title} />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">{tabData[activeTab].title}</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {tabData[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

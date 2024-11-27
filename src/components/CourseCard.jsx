import React from 'react';

export default function CourseCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Dersi Başlat
      </button>
    </div>
  );
}
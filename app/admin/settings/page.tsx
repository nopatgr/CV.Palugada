'use client';

import { useState } from 'react'

export default function SettingsPage() {
  const [lastLogin] = useState<string>(new Date().toLocaleString())

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account settings</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Change Password</label>
              <button className="mt-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Info</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600">Version: 1.0.0</p>
            <p className="text-sm text-gray-600">Last Login: {lastLogin}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

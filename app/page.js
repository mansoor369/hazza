import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PMOEP Project</h1>
              <p className="text-sm text-gray-600">Power BI Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Container */}
        <div className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden">
          {/* Report Header */}
          <div className="bg-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-lg font-semibold text-white">Seats Analysis Report</h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200">
                  Live Data
                </span>
              </div>
            </div>
          </div>

          {/* Report Frame */}
          <div className="p-6">
            <div className="relative bg-gray-50 rounded-md overflow-hidden">
              <iframe 
                title="Seats Analysis" 
                width="100%" 
                height="600" 
                src="https://app.powerbi.com/reportEmbed?reportId=041fbbe0-7cb1-44a8-ba1a-06cc81250406&autoAuth=true&ctid=8fcff337-c726-45dd-8d98-c8ba4db7cc15" 
                frameBorder="0" 
                allowFullScreen="true"
                className="w-full h-[600px] border-0"
              />
            </div>
          </div>

          {/* Report Footer */}
          <div className="bg-gray-100 px-6 py-4 border-t border-gray-300">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                <span>Connected to Power BI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Data Status</h3>
                <p className="text-sm text-gray-600">Real-time updates</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Performance</h3>
                <p className="text-sm text-gray-600">Optimized loading</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600">Interactive insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

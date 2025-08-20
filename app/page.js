
export default function Home() {
  return (
    <div className="min-h-screen font-[Nunito] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <div className="bg-gray-800/90 backdrop-blur-md shadow-xl border-b border-gray-700/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                PMOEP Analytics Hub
              </h1>
              <p className="text-sm text-gray-300 mt-1 font-medium">Comprehensive Data Intelligence Platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics Dashboard */}
      <div className="max-w-7xl mx-auto   px-6 py-6">
        {/* Dashboard Header */}

        {/* Refreshing Visuals */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">Real-Time Analytics Dashboard</h2>
          <p className="text-sm text-gray-400 max-w-3xl mx-auto">
            Comprehensive insights into Hazza Institutes, Partner Institutes, and PMOEP Project performance metrics
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800/90">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300">Hazza Institutes</h3>
                <p className="text-2xl font-bold text-white">27</p>
                <p className="text-xs text-gray-400 font-medium">Active Centers</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800/90">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300">Partner Institutes</h3>
                <p className="text-2xl font-bold text-white">16</p>
                <p className="text-xs text-gray-400 font-medium">Collaborative Centers</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800/90">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300">Data Coverage</h3>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-400 font-medium">Complete Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seats Analysis Report */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden mb-8 hover:shadow-3xl transition-all duration-500 hover:bg-gray-800/95">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Seats Analysis Report</h2>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Comprehensive Institute Attendance Analytics</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Live Data Stream
                </span>
              </div>
            </div>
          </div>

          {/* Report Description */}
          <div className="px-6 py-6 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-b border-gray-700/50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2">Report Overview</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  This comprehensive analysis provides detailed insights into the <span className="font-bold text-white">Seats Analysis Report</span> for the <span className="font-bold text-white">PMOEP Project</span>, analyzing the overall <span className="font-bold text-white">NSIS present, absent, and enrolled data</span> across all <span className="font-bold text-white">Hazza Institute</span> and <span className="font-bold text-white">Partner Institutes</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Report Frame */}
          <div className="p-6">
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-inner border border-gray-700/50">
              <iframe
                title="Seats Analysis"
                width="100%"
                height="500"
                src="https://app.powerbi.com/view?r=eyJrIjoiMjA2N2NlN2UtZTEwZC00MTdkLThkM2EtZThjYmQ2MTI0YmIyIiwidCI6IjhmY2ZmMzM3LWM3MjYtNDVkZC04ZDk4LWM4YmE0ZGI3Y2MxNSIsImMiOjl9"
                allowFullScreen={true}
                className="w-full h-[500px] border-0"
              />
            </div>
          </div>

          {/* Report Footer */}
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 px-6 py-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated: <span className="font-semibold text-gray-300">{new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span></span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Data Source: <span className="font-semibold text-gray-300">Power BI Analytics</span></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-gray-300">Connected & Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hazza Registration Report */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden mb-8 hover:shadow-3xl transition-all duration-500 hover:bg-gray-800/95">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Hazza Overseas Batch 2 Registration Report</h2>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Advanced Registration Analytics Platform</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Real-time Updates
                </span>
              </div>
            </div>
          </div>

          {/* Report Description */}
          <div className="px-6 py-6 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-b border-gray-700/50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2">Report Overview</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  This advanced analytics section features the <span className="font-bold text-white">Registration Analysis Report</span> for the <span className="font-bold text-white">PMOEP Project</span>, covering comprehensive data for trades including <span className="font-bold text-white">HTV, HMO, Electrician, Plumber, Welder, LTV, Shuttering Carpenter, Construction Worker, and Steel Fixer</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Report Frame */}
          <div className="p-6">
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-inner border border-gray-700/50">
              <iframe
                title="Registration Analysis"
                width="100%"
                height="500"
                src="https://app.powerbi.com/view?r=eyJrIjoiOGNiZGI4MGMtMDdmOC00YTAzLTgxMWYtZDM3ZTQ3YzY0MzEzIiwidCI6IjhmY2ZmMzM3LWM3MjYtNDVkZC04ZDk4LWM4YmE0ZGI3Y2MxNSIsImMiOjl9" 
                allowFullScreen={true}
                className="w-full h-[500px] border-0"
              />
            </div>
          </div>

          {/* Report Footer */}
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 px-6 py-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated: <span className="font-semibold text-gray-300">{new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span></span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Data Source: <span className="font-semibold text-gray-300">Power BI Analytics</span></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-gray-300">Connected & Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hazza Leads Report */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden mb-8 hover:shadow-3xl transition-all duration-500 hover:bg-gray-800/95">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Hazza Overseas Batch 2 Leads Report</h2>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Strategic Leads Intelligence Platform</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Live Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* Report Description */}
          <div className="px-6 py-6 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-b border-gray-700/50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2">Report Overview</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  This strategic intelligence section features the <span className="font-bold text-white">Leads Analysis Report</span> for <span className="font-bold text-white">Batch 2 of the PMOEP Project</span>, providing comprehensive insights into lead generation, conversion metrics, and strategic opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Report Frame */}
          <div className="p-6">
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-inner border border-gray-700/50">
              <iframe
                title="Leads Analysis"
                width="100%"
                height="500"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDZjOTE2NDAtMmMzYi00MTRjLWI1N2ItOThmMzc3YTc4N2IyIiwidCI6IjhmY2ZmMzM3LWM3MjYtNDVkZC04ZDk4LWM4YmE0ZGI3Y2MxNSIsImMiOjl9"
                className="w-full h-[500px] border-0"
              />
            </div>
          </div>

          {/* Report Footer */}
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 px-6 py-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated: <span className="font-semibold text-gray-300">{new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span></span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Data Source: <span className="font-semibold text-gray-300">Power BI Analytics</span></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-gray-300">Connected & Active</span>
              </div>
            </div>
          </div>
        </div>

         {/* FeedBack Calls Report */}
         <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden mb-8 hover:shadow-3xl transition-all duration-500 hover:bg-gray-800/95">
          {/* Report Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Hazza Overseas Batch 2 Leads Report</h2>
                  <p className="text-xs text-gray-300 mt-1 font-medium">Strategic Leads Intelligence Platform</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Live Intelligence
                </span>
              </div>
            </div>
          </div>

          {/* Report Description */}
          <div className="px-6 py-6 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-b border-gray-700/50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-2">Report Overview</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  This  section features the <span className="font-bold text-white">Callers Feedback Report Calling</span> for <span className="font-bold text-white">Batch 2 of the PMOEP Project</span>.</p>
              </div>
            </div>
          </div>

          {/* Report Frame */}
          <div className="p-6">
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-inner border border-gray-700/50">
              <iframe
                title="Leads Analysis"
                width="100%"
                height="500"
                src="https://app.powerbi.com/view?r=eyJrIjoiMDM3ZDFjMDYtNWM4Yy00NzhiLWIzZDgtOTliMjdmMDRhZjgzIiwidCI6IjhmY2ZmMzM3LWM3MjYtNDVkZC04ZDk4LWM4YmE0ZGI3Y2MxNSIsImMiOjl9"
                className="w-full h-[500px] border-0"
              />
            </div>
          </div>

          {/* Report Footer */}
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 px-6 py-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Last updated: <span className="font-semibold text-gray-300">{new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span></span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Data Source: <span className="font-semibold text-gray-300">Power BI Analytics</span></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-gray-300">Connected & Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center py-8">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-3">PMOEP Analytics Hub</h3>
            <p className="text-sm text-gray-400 mb-4">
              Empowering data-driven decisions with comprehensive analytics and real-time insights
            </p>
            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Live Data</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Real-time Updates</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Advanced Analytics</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

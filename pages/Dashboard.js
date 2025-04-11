function Dashboard({ onNavigate }) {
    return (
      <div className="page-transition container mx-auto px-4 py-8" data-id="rqqxm75rj" data-path="pages/Dashboard.js">
        <div className="mb-8" data-id="5ldx5u21y" data-path="pages/Dashboard.js">
          <h2 className="text-2xl font-bold text-gray-800 mb-2" data-id="2nblq15qb" data-path="pages/Dashboard.js">Welcome to Your daily Dashboard - Cain</h2>
          <p className="text-gray-600" data-id="2vqhnr1fd" data-path="pages/Dashboard.js">Select one of the options below to access specific information.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="3r8sifxbv" data-path="pages/Dashboard.js">
          <DashboardCard
            title="Your Daily Resources"
            icon="fa-book"
            description="Access your daily learning materials and resources."
            color="blue"
            onClick={() => onNavigate('dailyResources')} data-id="vxpm5gq1x" data-path="pages/Dashboard.js" />
  
          
          <DashboardCard
            title="Your Score Card"
            icon="fa-chart-line"
            description="View your performance metrics and progress tracking."
            color="green"
            onClick={() => onNavigate('scoreCard')} data-id="8mhmlsnpo" data-path="pages/Dashboard.js" />
  
          
          <DashboardCard
            title="Your Daily Quotes"
            icon="fa-quote-right"
            description="Get inspired with motivational quotes updated daily."
            color="purple"
            onClick={() => onNavigate('dailyQuotes')} data-id="yjzqew3ci" data-path="pages/Dashboard.js" />
  
        </div>
        
        <div className="mt-10 bg-white rounded-xl shadow-md p-6" data-id="u8b0mq8j0" data-path="pages/Dashboard.js">
          <h3 className="text-xl font-bold text-gray-800 mb-4" data-id="s2enip6n1" data-path="pages/Dashboard.js">Recent Activity</h3>
          
          <div className="space-y-4" data-id="i2mtkb1jb" data-path="pages/Dashboard.js">
            <div className="flex items-start p-3 bg-gray-50 rounded-lg" data-id="qy9cg7m3p" data-path="pages/Dashboard.js">
              <div className="text-blue-500 mr-4" data-id="mm5b6r0io" data-path="pages/Dashboard.js">
                <i className="fas fa-book text-lg" data-id="r5atbkqoh" data-path="pages/Dashboard.js"></i>
              </div>
              <div data-id="vf3p43nfz" data-path="pages/Dashboard.js">
                <h4 className="font-medium text-gray-800" data-id="2wbrb09wt" data-path="pages/Dashboard.js">New resource added: " daily -Resources "</h4>
                <p className="text-gray-600 text-sm" data-id="eg1lar8ai" data-path="pages/Dashboard.js">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 bg-gray-50 rounded-lg" data-id="2e5q0nxmc" data-path="pages/Dashboard.js">
              <div className="text-green-500 mr-4" data-id="82rco8qcg" data-path="pages/Dashboard.js">
                <i className="fas fa-chart-line text-lg" data-id="ycr6ddtl1" data-path="pages/Dashboard.js"></i>
              </div>
              <div data-id="8aoqzrr0y" data-path="pages/Dashboard.js">
                <h4 className="font-medium text-gray-800" data-id="hr8biqlew" data-path="pages/Dashboard.js">Score updated: +200 points</h4>
                <p className="text-gray-600 text-sm" data-id="lv0bd8tif" data-path="pages/Dashboard.js">Yesterday</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 bg-gray-50 rounded-lg" data-id="ag80h01ga" data-path="pages/Dashboard.js">
              <div className="text-purple-500 mr-4" data-id="gtv0qgzab" data-path="pages/Dashboard.js">
                <i className="fas fa-quote-right text-lg" data-id="br7ehbc3x" data-path="pages/Dashboard.js"></i>
              </div>
              <div data-id="nsz1va631" data-path="pages/Dashboard.js">
                <h4 className="font-medium text-gray-800" data-id="2rtpwemmf" data-path="pages/Dashboard.js">New quote of the day available</h4>
                <p className="text-gray-600 text-sm" data-id="f5ym0dwj0" data-path="pages/Dashboard.js">Today at 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  
  }

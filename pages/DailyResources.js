function DailyResources({ onBack }) {
    const [activeTab, setActiveTab] = React.useState('all');
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="page-transition container mx-auto px-4 py-8 max-w-6xl" data-id="jfrpgndv8" data-path="pages/DailyResources.js">
        <div className="flex justify-between items-center mb-6" data-id="hq05ppgbx" data-path="pages/DailyResources.js">
          <h2 className="text-2xl font-bold text-gray-800" data-id="azmkn7hn2" data-path="pages/DailyResources.js">Daily Resources</h2>
          <button
            onClick={onBack}
            className="back-button flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200" data-id="efhv12yim" data-path="pages/DailyResources.js">
  
            <i className="fas fa-arrow-left mr-2" data-id="noj09jhgd" data-path="pages/DailyResources.js"></i>
            Back to Dashboard
          </button>
        </div>
  
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8" data-id="7sehgtcwm" data-path="pages/DailyResources.js">
          <div className="flex overflow-x-auto border-b" data-id="wjbe1gfc9" data-path="pages/DailyResources.js">
            <button
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => handleTabChange('all')} data-id="ngznu8564" data-path="pages/DailyResources.js">
  
              Resources Materials 
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'articles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => handleTabChange('articles')} data-id="jfthay7zy" data-path="pages/DailyResources.js">
  
            </button>
          </div>
  
          <div className="p-6" data-id="g52caf68x" data-path="pages/DailyResources.js">
            <div className="mb-6" data-id="godfd3tlg" data-path="pages/DailyResources.js">
             
            </div>
  
            <div className="card-grid" data-id="h3u0zk802" data-path="pages/DailyResources.js">
              {resourcesData.map((resource, index) =>
              <div key={index} className="dashboard-card bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md" data-id="8kfzr09d5" data-path="pages/DailyResources.js">
                  <div className="h-40 bg-gray-200 relative overflow-hidden" data-id="gcyijas6k" data-path="pages/DailyResources.js">
                    <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover" data-id="q2unqgkg3" data-path="pages/DailyResources.js" />
  
                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded" data-id="f93xrw6ax" data-path="pages/DailyResources.js">
                      {resource.type}
                    </div>
                  </div>
                  <div className="p-5" data-id="lfom93g05" data-path="pages/DailyResources.js">
                    <h3 className="font-semibold text-lg mb-2" data-id="tlsvjk8b9" data-path="pages/DailyResources.js">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4" data-id="xusx3rwgf" data-path="pages/DailyResources.js">{resource.description}</p>
                    <div className="flex justify-between items-center" data-id="fzixj0d3q" data-path="pages/DailyResources.js">
                      <span className="text-xs text-gray-500" data-id="5o4p45r7h" data-path="pages/DailyResources.js">
                        <i className="far fa-clock mr-1" data-id="lmfqtb6bs" data-path="pages/DailyResources.js"></i>
                        {resource.date}
                      </span>
                      <a href="https://drive.google.com/drive/folders/1Nsp-sfJ70jSTLJWQ2MYNsOSdDHOgZKen?usp=drive_link" target="_blank" rel="noopener noreferrer">
  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm" data-id="fx064lpl2" data-path="">
    View Resource
  </button>
</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
  
        

  </div> )}
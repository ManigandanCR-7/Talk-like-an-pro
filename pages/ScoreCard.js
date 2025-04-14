function ScoreCard({ onBack }) {
  return (
    <div className="page-transition container mx-auto px-4 py-8 max-w-6xl" data-id="mrh0yao8i" data-path="pages/ScoreCard.js">
      <div className="flex justify-between items-center mb-6" data-id="zphomtidl" data-path="pages/ScoreCard.js">
        <h2 className="text-2xl font-bold text-gray-800" data-id="s46juukfq" data-path="pages/ScoreCard.js">Your Score Card</h2>
        <button
          onClick={onBack}
          className="back-button flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200" data-id="4gas56ajy" data-path="pages/ScoreCard.js">

          <i className="fas fa-arrow-left mr-2" data-id="99ryt79yo" data-path="pages/ScoreCard.js"></i>
          Back to Dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="jbymobfhi" data-path="pages/ScoreCard.js">
        <div className="bg-white rounded-xl shadow-md p-6" data-id="pdpgaenab" data-path="pages/ScoreCard.js">
          <div className="flex items-center justify-between mb-4" data-id="uthxd4ei1" data-path="pages/ScoreCard.js">
            <h3 className="font-semibold text-gray-700" data-id="qi27qrxer" data-path="pages/ScoreCard.js">Current Score</h3>
            <span className="text-blue-500" data-id="ca7p17yzp" data-path="pages/ScoreCard.js">
              <i className="fas fa-trophy" data-id="1gvbnoibf" data-path="pages/ScoreCard.js"></i>
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2" data-id="8vzh0arz7" data-path="pages/ScoreCard.js">1000 pts</div>
          <div className="flex items-center text-green-600" data-id="ep2ru8w0v" data-path="pages/ScoreCard.js">
            <i className="fas fa-arrow-up mr-1" data-id="5vlpsznbi" data-path="pages/ScoreCard.js"></i>
            <span className="font-medium" data-id="2iui99igc" data-path="pages/ScoreCard.js">18%</span>
            <span className="text-gray-500 text-sm ml-2" data-id="rxova8nwb" data-path="pages/ScoreCard.js">from last day</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6" data-id="5clustylh" data-path="pages/ScoreCard.js">
          <div className="flex items-center justify-between mb-4" data-id="9223xndfe" data-path="pages/ScoreCard.js">
            <h3 className="font-semibold text-gray-700" data-id="4n94xobl6" data-path="pages/ScoreCard.js">Resources Completed</h3>
            <span className="text-green-500" data-id="4pm7s95n8" data-path="pages/ScoreCard.js">
              <i className="fas fa-check-circle" data-id="fcpklj2zh" data-path="pages/ScoreCard.js"></i>
            </span>
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2" data-id="dxes5vq62" data-path="pages/ScoreCard.js">3</div>
          <div className="flex items-center text-green-600" data-id="v8pulexcp" data-path="pages/ScoreCard.js">
            <i className="fas fa-arrow-up mr-1" data-id="7x3qncq7g" data-path="pages/ScoreCard.js"></i>
            <span className="font-medium" data-id="itq4btslq" data-path="pages/ScoreCard.js">3%</span>
            <span className="text-gray-500 text-sm ml-2" data-id="dey1wvb5k" data-path="pages/ScoreCard.js">from day 3</span>
          </div>
        </div>

        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-id="02ffpoc0h" data-path="pages/ScoreCard.js">
        

        <div className="bg-white rounded-xl shadow-md p-6" data-id="8pnvafj1s" data-path="pages/ScoreCard.js">
          <h3 className="font-semibold text-gray-800 mb-4" data-id="kns4qi73k" data-path="pages/ScoreCard.js">Achievement Badges</h3>
          <div className="grid grid-cols-3 gap-4" data-id="ritwerfdl" data-path="pages/ScoreCard.js">
            {scoreData.badges.map((badge, index) =>
            <div key={index} className="flex flex-col items-center" data-id="8zfk98m4u" data-path="pages/ScoreCard.js">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${badge.unlocked ? badge.color : 'bg-gray-200'}`} data-id="i1dx4gklc" data-path="pages/ScoreCard.js">
                  <i className={`fas ${badge.icon} text-2xl ${badge.unlocked ? 'text-white' : 'text-gray-400'}`} data-id="rsju11o28" data-path="pages/ScoreCard.js"></i>
                </div>
                <p className="text-sm text-center mt-2 font-medium" data-id="12p60p1ba" data-path="pages/ScoreCard.js">{badge.name}</p>
                <p className="text-xs text-gray-500" data-id="hwpixqz34" data-path="pages/ScoreCard.js">{badge.unlocked ? 'Unlocked' : 'Locked'}</p>
              </div>
            )}
          </div>
          <div className="mt-6 border-t pt-4" data-id="5n1ana3g9" data-path="pages/ScoreCard.js">
            <h4 className="font-medium text-gray-700 mb-2" data-id="cqgqrfuk4" data-path="pages/ScoreCard.js">Next Achievement</h4>
            <div className="bg-gray-50 p-4 rounded-lg" data-id="4g2zoleua" data-path="pages/ScoreCard.js">
              <div className="flex items-center mb-2" data-id="0iteyl1ri" data-path="pages/ScoreCard.js">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3" data-id="2zjx0qw14" data-path="pages/ScoreCard.js">
                  <i className="fas fa-award" data-id="j427o7nlj" data-path="pages/ScoreCard.js"></i>
                </div>
                <div data-id="lwu39qzjq" data-path="pages/ScoreCard.js">
                  <h5 className="font-medium" data-id="yf3s0lwud" data-path="pages/ScoreCard.js">Resource Master</h5>
                  <p className="text-sm text-gray-600" data-id="3iiumxeos" data-path="pages/ScoreCard.js">Completed 3 modules</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5" data-id="3ug9z0met" data-path="pages/ScoreCard.js">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '18%' }} data-id="gekojw2x4" data-path="pages/ScoreCard.js"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right" data-id="0l55znh4t" data-path="pages/ScoreCard.js">18/100 completed</p>
            </div>
          </div>
        </div>
      </div>

  
    </div>);

}

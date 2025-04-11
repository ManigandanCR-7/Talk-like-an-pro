function DailyQuotes({ onBack }) {
    const [favorites, setFavorites] = React.useState([]);
  
    const toggleFavorite = (quoteId) => {
      if (favorites.includes(quoteId)) {
        setFavorites(favorites.filter((id) => id !== quoteId));
      } else {
        setFavorites([...favorites, quoteId]);
      }
    };
  
    return (
      <div className="page-transition container mx-auto px-4 py-8 max-w-6xl" data-id="euf43023q" data-path="pages/DailyQuotes.js">
        <div className="flex justify-between items-center mb-6" data-id="izcikynzh" data-path="pages/DailyQuotes.js">
          <h2 className="text-2xl font-bold text-gray-800" data-id="mmkd4w6yg" data-path="pages/DailyQuotes.js">Daily Quotes</h2>
          <button
            onClick={onBack}
            className="back-button flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200" data-id="h57xolyae" data-path="pages/DailyQuotes.js">
  
            <i className="fas fa-arrow-left mr-2" data-id="mn91ki7n6" data-path="pages/DailyQuotes.js"></i>
            Back to Dashboard
          </button>
        </div>
  
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md p-8 mb-8 text-white" data-id="li3xzke5i" data-path="pages/DailyQuotes.js">
          <div className="flex flex-col md:flex-row items-center" data-id="993nebcee" data-path="pages/DailyQuotes.js">
            <div className="w-full md:w-3/4" data-id="cynptyrnh" data-path="pages/DailyQuotes.js">
              <div className="text-sm font-semibold mb-2 uppercase tracking-wide opacity-80" data-id="mm72a4v6x" data-path="pages/DailyQuotes.js">Quote of the Day</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" data-id="n6swx9z1g" data-path="pages/DailyQuotes.js">
                "Success is not final, failure is not fatal: It is the courage to continue that counts."
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-4" data-id="5ga4c4rkh" data-path="pages/DailyQuotes.js">-Winston Churchill</p>
              <div className="flex space-x-3" data-id="7ocmw33fn" data-path="pages/DailyQuotes.js">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-4 py-2 flex items-center transition-colors" data-id="rkl297a1b" data-path="pages/DailyQuotes.js">
                  <i className="fas fa-share-alt mr-2" data-id="birot2iip" data-path="pages/DailyQuotes.js"></i>
                  Share
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-4 py-2 flex items-center transition-colors" data-id="12552h7p8" data-path="pages/DailyQuotes.js">
                  <i className="fas fa-heart mr-2" data-id="tqrev7p5y" data-path="pages/DailyQuotes.js"></i>
                  Save
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-center mt-6 md:mt-0" data-id="5gltkolsq" data-path="pages/DailyQuotes.js">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center" data-id="vd82g9ubn" data-path="pages/DailyQuotes.js">
                <i className="fas fa-quote-right text-5xl opacity-70" data-id="8rxwdkgg3" data-path="pages/DailyQuotes.js"></i>
              </div>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-id="u0n6uk8yx" data-path="pages/DailyQuotes.js">
          <div className="bg-white rounded-xl shadow-md p-6" data-id="52dwylyu3" data-path="pages/DailyQuotes.js">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center" data-id="lfhnlao2y" data-path="pages/DailyQuotes.js">
              <i className="fas fa-calendar-day text-blue-500 mr-2" data-id="7ln9i5yy9" data-path="pages/DailyQuotes.js"></i>
              This Week's Quotes
            </h3>
            <div className="space-y-4" data-id="psuxk53yh" data-path="pages/DailyQuotes.js">
              {quotesData.weekly.map((quote, index) =>
              <div key={index} className="p-4 bg-gray-50 rounded-lg" data-id="els04hkae" data-path="pages/DailyQuotes.js">
                  <p className="text-gray-700 mb-2" data-id="5nqz7xsbg" data-path="pages/DailyQuotes.js">"{quote.text}"</p>
                  <div className="flex justify-between items-center" data-id="wbcd83wtq" data-path="pages/DailyQuotes.js">
                    <p className="text-sm text-gray-500" data-id="66lpkc5p7" data-path="pages/DailyQuotes.js">- {quote.author}</p>
                    <button
                    onClick={() => toggleFavorite(quote.id)}
                    className={`text-lg ${favorites.includes(quote.id) ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`} data-id="xo9k88v01" data-path="pages/DailyQuotes.js">
  
                      <i className="fas fa-heart" data-id="tzd7r6yrq" data-path="pages/DailyQuotes.js"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
  
          <div className="bg-white rounded-xl shadow-md p-6" data-id="cbzd9mwbl" data-path="pages/DailyQuotes.js">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center" data-id="jxo1uioyn" data-path="pages/DailyQuotes.js">
              <i className="fas fa-star text-yellow-500 mr-2" data-id="eawk003yz" data-path="pages/DailyQuotes.js"></i>
              Motivational Quotes
            </h3>
            <div className="space-y-4" data-id="nwasrxwgo" data-path="pages/DailyQuotes.js">
              {quotesData.motivational.map((quote, index) =>
              <div key={index} className="p-4 bg-gray-50 rounded-lg" data-id="ydlrhhbll" data-path="pages/DailyQuotes.js">
                  <p className="text-gray-700 mb-2" data-id="863drl8qq" data-path="pages/DailyQuotes.js">"{quote.text}"</p>
                  <div className="flex justify-between items-center" data-id="yhdczryge" data-path="pages/DailyQuotes.js">
                    <p className="text-sm text-gray-500" data-id="w7niqbmal" data-path="pages/DailyQuotes.js">- {quote.author}</p>
                    <button
                    onClick={() => toggleFavorite(quote.id)}
                    className={`text-lg ${favorites.includes(quote.id) ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`} data-id="orh20mxh7" data-path="pages/DailyQuotes.js">
  
                      <i className="fas fa-heart" data-id="pmelvtxsz" data-path="pages/DailyQuotes.js"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
  
        
  </div> ) } 

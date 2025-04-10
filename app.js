function App() {
    const [currentPage, setCurrentPage] = React.useState('dashboard');
  
    const navigateTo = (page) => {
      setCurrentPage(page);
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };
  
    const renderPage = () => {
      switch (currentPage) {
        case 'dashboard':
          return <Dashboard onNavigate={navigateTo} data-id="ugoz0hgla" data-path="app.js" />;
        case 'dailyResources':
          return <DailyResources onBack={() => navigateTo('dashboard')} data-id="rd7idhjgp" data-path="app.js" />;
        case 'scoreCard':
          return <ScoreCard onBack={() => navigateTo('dashboard')} data-id="k8pahcxv7" data-path="app.js" />;
        case 'dailyQuotes':
          return <DailyQuotes onBack={() => navigateTo('dashboard')} data-id="yte59kxtq" data-path="app.js" />;
        default:
          return <Dashboard onNavigate={navigateTo} data-id="kqo10b8ro" data-path="app.js" />;
      }
    };
  
    return (
      <div className="flex flex-col min-h-screen" data-id="xyyajhibu" data-path="app.js">
        <Navbar data-id="5kin5ndfq" data-path="app.js" />
        <main className="flex-grow bg-gray-100" data-id="47bijq0r5" data-path="app.js">
          {renderPage()}
        </main>
        <Footer data-id="2a3780yt4" data-path="app.js" />
      </div>);
  
  }
  
  // Render the App
  ReactDOM.render(
    <App data-id="vz8s6l8hs" data-path="app.js" />,
    document.getElementById('root')
  );
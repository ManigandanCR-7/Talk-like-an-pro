function DashboardCard({ title, icon, description, color, onClick }) {
    const bgColorClasses = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      orange: 'bg-orange-500 hover:bg-orange-600',
      red: 'bg-red-500 hover:bg-red-600',
      indigo: 'bg-indigo-500 hover:bg-indigo-600'
    };
  
    const bgClass = bgColorClasses[color] || bgColorClasses.blue;
  
    return (
      <div
        className={`dashboard-card ${bgClass} rounded-xl p-6 text-white cursor-pointer shadow-lg`}
        onClick={onClick} data-id="cukfe8iqw" data-path="components/DashboardCard.js">
  
        <div className="flex items-center justify-between mb-4" data-id="wwjozdkyf" data-path="components/DashboardCard.js">
          <h3 className="text-xl font-bold" data-id="zu7z0gymp" data-path="components/DashboardCard.js">{title}</h3>
          <div className="text-3xl" data-id="2ko327aep" data-path="components/DashboardCard.js">
            <i className={`fas ${icon}`} data-id="2x357bbhb" data-path="components/DashboardCard.js"></i>
          </div>
        </div>
        <p className="text-white text-opacity-90" data-id="qxpzex1cq" data-path="components/DashboardCard.js">{description}</p>
        <div className="mt-6 flex justify-end" data-id="nxxnbch5h" data-path="components/DashboardCard.js">
          <button className="flex items-center text-sm font-medium bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg px-3 py-2 transition-all" data-id="pbjz670fy" data-path="components/DashboardCard.js">
            View
            <i className="fas fa-arrow-right ml-2" data-id="73v08g631" data-path="components/DashboardCard.js"></i>
          </button>
        </div>
      </div>);
  
  }
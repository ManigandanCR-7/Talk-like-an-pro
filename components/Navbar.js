function Navbar() {
    return (
      <nav className="bg-white shadow-md py-4" data-id="grq3zhbmm" data-path="components/Navbar.js">
        <div className="container mx-auto px-4 flex justify-between items-center" data-id="36thqij9t" data-path="components/Navbar.js">
          <div className="flex items-center gap-3" data-id="5qfgsudax" data-path="components/Navbar.js">
            <i className="fas fa-th-large text-blue-600 text-2xl mr-3" data-id="xsrxr9baq" data-path="components/Navbar.js"></i>
            <h1 className="text-xl font-bold text-gray-800" data-id="iv48cxtk6" data-path="components/Navbar.js">Talk like pro-dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Music Button */}
            <button
              onClick={() => {
                const audio = document.getElementById('dashboard-music');
                if (audio.paused) {
                  audio.play();
                } else {
                  audio.pause();
                }
              }}
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              <i className="fas fa-music text-xl"></i>
            </button>
  
            {/* Mobile Menu */}
            <button className="md:hidden text-gray-600" data-id="ojfp4l1s8" data-path="components/Navbar.js">
              <i className="fas fa-bars text-xl" data-id="s9wjyrxus" data-path="components/Navbar.js"></i>
            </button>
          </div>
        </div>
  
        {/* Hidden audio element */}
        <audio id="dashboard-music" src="yt1z.net - 10 Minute Countdown Timer with Relaxing Jazz Music for a Break 10분 타이머 편안한 재즈음악 힐링타임 쉬는 시간 카운트다운 (320 KBps) (3).mp3" preload="auto"></audio>
      </nav>
    );
  }
  
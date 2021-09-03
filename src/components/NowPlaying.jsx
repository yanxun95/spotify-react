const NowPlaying = () => {
  return (
    <div className="now-playing-bar">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="current-song-col">
            <div className="current-song-info">
              <div className="current-song-img-col">
                <img
                  src="https://i.insider.com/5a85ff4dd0307223008b46ed?width=600&format=jpeg&auto=webp"
                  alt=""
                  className="current-song-img"
                />
              </div>
              <div className="current-song">
                <span className="current-song-name">Happier</span>
                <span className="current-song-artist">Ed Sheeran</span>
              </div>
              <div className="current-song-icon">
                <i className="bi bi-heart"></i>
                <i className="bi bi-pip pip-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="current-playing-col">
            <div className="current-playing-info">
              <div className="current-playing-icon">
                <div className="current-playing-icon-left">
                  <i className="bi bi-shuffle"></i>
                  <i className="fas fa-step-backward"></i>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <div className="current-playing-icon-right">
                  <i className="fas fa-step-forward"></i>
                  <i className="bi bi-arrow-repeat"></i>
                </div>
              </div>
              <div className="current-playing-progress">
                <span className="current-playing-time">0:00</span>
                <div className="progress playing">
                  <div
                    className="progress-bar playing"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="current-playing-time">3:48</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="current-volume-col">
            <div className="current-volume-info">
              <i className="bi bi-list"></i>
              <i className="bi bi-laptop"></i>
              <i className="bi bi-volume-up"></i>
              <div className="progress volume">
                <div
                  className="progress-bar volume"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <i className="bi bi-arrows-angle-expand"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;

const FriendList = () => {
  return (
    <div className="container friend-list">
      <div className="friend-activity">
        <h5>Friend activity</h5>
        <i className="bi bi-person-plus btn-add-friend"></i>
      </div>

      <div className="all-friend">
        <div className="list-of-friend">
          <div className="list-of-friend-img-col">
            <img
              src="https://m.media-amazon.com/images/I/61xwPqmQqWL._AC_SS450_.jpg"
              className="list-of-friend-img"
              alt="..."
            />
            <div className="friend-img-hover">
              <i className="bi bi-play-fill"></i>
            </div>
          </div>
          <div className="list-of-friend-info">
            <span className="friend-name">
              <strong>Batman</strong>
            </span>
            <div>
              <span className="friend-song-name">Batman</span>
              <span className="friend-song-dot">&bull;</span>
              <span className="friend-artist-name">Superman</span>
            </div>

            <div>
              <i className="bi bi-record-circle"></i>
              <span className="friend-playlist-name">Justice league</span>
            </div>
          </div>
          <div className="list-of-friend-playing-days">
            <i className="bi bi-bar-chart-fill"></i>
          </div>
        </div>

        <div className="list-of-friend">
          <div className="list-of-friend-img-col">
            <img
              src="https://i1.sndcdn.com/artworks-000667496170-isha5h-t500x500.jpg"
              className="list-of-friend-img"
              alt="..."
            />
            <div className="friend-img-hover">
              <i className="bi bi-play-fill"></i>
            </div>
          </div>
          <div className="list-of-friend-info">
            <span className="friend-name">
              <strong>Milos</strong>
            </span>
            <div>
              <span className="friend-song-name">Banana</span>
              <span className="friend-song-dot">&bull;</span>
              <span className="friend-artist-name">Apple</span>
            </div>
            <div>
              <i className="bi bi-record-circle"></i>
              <span className="friend-playlist-name">Apple pen</span>
            </div>
          </div>
          <div className="list-of-friend-playing-days">2 d</div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;

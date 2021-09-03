const ColumnList = ({ album }) => {
  return (
    <div className="col-6 big-col big-play-list-col">
      <div className="card big-playlist-no-border-radius">
        <div className="big-playlist-with-btn-play">
          <img
            src={album.album.cover}
            className="card-img-top big-playlist-img-no-radius"
            alt="..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-play-circle-fill play-with-animation"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>
        </div>
        <div className="card-body big-card-body">
          <h5 className="big-playlist-title">{album.album.title}</h5>
          <span className="big-playlist-name">{album.artist.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ColumnList;

import { useEffect, useState } from "react";
import ColumnList from "./ColumnList";

const RowList = ({ name }) => {
  const [albums, setAlbum] = useState([]);

  const getAlbum = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + name,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        let result = await response.json();
        console.log("Result", result);
        setAlbum(result.data);
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlbum();
  }, []);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="small-container">
      <div className="big-playlist-container">
        <div className="heading-see-all">
          <span className="playlist-area-title">{capitalize(name)}</span>
          <span className="see-all">SEE ALL</span>
        </div>

        <div className="row mt-2 big-col-playlist">
          {albums.length !== 0 &&
            albums
              .slice(0, 8)
              .map((album) => <ColumnList album={album} key={album.id} />)}
        </div>
      </div>
    </div>
  );
};

export default RowList;

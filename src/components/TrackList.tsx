function TrackList({ tracks }) {
  const playTrack = (uri: string) => {
    fetch("https://cactro-backend-spotify.onrender.com/spotify/play", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri })
    });
  };

  const pauseTrack = () => {
    fetch("https://cactro-backend-spotify.onrender.com/spotify/pause", {
      method: "POST"
    });
  };

  return (
    <ul>
      {tracks.map((track, index) => (
        <li key={index} className="flex items-center gap-2">
          {track.name} — {track.artist}
          <button onClick={() => playTrack(track.uri)}>▶️</button>
          <button onClick={pauseTrack}>⏸️</button>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
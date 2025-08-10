function TrackList({ tracks }) {
  const playTrack = (uri: string) => {
    fetch("https://cactro-backend-spotify.onrender.com/spotify/play", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri })
    });
  };

  const pauseTrack = async () => {
  const res = await fetch("https://cactro-backend-spotify.onrender.com/spotify/pause", {
    method: "PUT"
  });

  if (!res.ok) {
    const errorData = await res.json();
    alert(errorData.error || "Failed to pause song");
  }
};


  return (
    <div>
      {/* Play any of top 10 songs */}
      <ul>
        {tracks.map((track, index) => (
          <li key={index} className="flex items-center gap-2">
            {track.name} — {track.artist}
            <button onClick={() => playTrack(track.uri)}>▶️ Play</button>
          </li>
        ))}
      </ul>

      {/* Pause currently playing */}
      <div className="mt-4">
        <button onClick={pauseTrack} className="bg-red-500 text-white px-3 py-1 rounded">
          ⏸️ Stop Current Song
        </button>
      </div>
    </div>
  );
}

export default TrackList;

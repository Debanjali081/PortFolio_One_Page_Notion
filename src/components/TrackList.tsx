export default function TrackList({ tracks }: { tracks: any[] }) {
  const handlePlay = async (uri: string) => {
    await fetch("https://cactro-backend-spotify.onrender.com/spotify/play", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri }),
    });
  };

  const handlePause = async () => {
    await fetch("https://cactro-backend-spotify.onrender.com/spotify/pause", {
      method: "PUT",
    });
  };

  return (
    <ul>
      {tracks.map((track, index) => (
        <li key={index} className="mb-3 flex items-center justify-between">
          <span>
            {track.name} — {track.artist}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handlePlay(track.uri)}
              className="bg-green-600 px-3 py-1 rounded text-white hover:bg-green-700"
            >
              ▶ Play
            </button>
            <button
              onClick={handlePause}
              className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700"
            >
              ⏸ Pause
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

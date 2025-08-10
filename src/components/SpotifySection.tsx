import { useEffect, useState } from "react";
import TrackList from "./TrackList";

export default function SpotifySection() {
  const [spotifyData, setSpotifyData] = useState<any>(null);

  useEffect(() => {
    fetch("https://cactro-backend-spotify.onrender.com/spotify")
      .then((res) => res.json())
      .then((data) => setSpotifyData(data))
      .catch((err) => console.error("Error fetching Spotify data", err));
  }, []);

  if (!spotifyData) return <p className="p-4">Loading Spotify data...</p>;

  return (
    <section className="p-6 bg-gray-50 mt-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🎵 My Spotify</h2>

      <h3 className="text-lg font-semibold mb-2">Top Tracks</h3>
      <TrackList tracks={spotifyData.top_tracks} />

      <h3 className="text-lg font-semibold mt-6 mb-2">Now Playing</h3>
      {spotifyData.currently_playing ? (
        <p>
          {spotifyData.currently_playing.name} —{" "}
          {spotifyData.currently_playing.artist}
        </p>
      ) : (
        <p>Nothing playing right now.</p>
      )}

      <h3 className="text-lg font-semibold mt-6 mb-2">Followed Artists</h3>
      <ul>
        {spotifyData.top_tracks?.map((track, index) => (
          <li key={index}>
            {track.name} — {track.artist}
          </li>
        ))}
      </ul>
    </section>
  );
}

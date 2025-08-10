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

      {/* Top Tracks */}
      <h3 className="text-lg font-semibold mb-2">Top Tracks</h3>
      {spotifyData.top_tracks?.length ? (
        <TrackList tracks={spotifyData.top_tracks} />
      ) : (
        <p>No top tracks available.</p>
      )}

      {/* Now Playing */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Now Playing</h3>
      {spotifyData.now_playing && spotifyData.now_playing !== "Nothing is playing" ? (
        <p>
          {spotifyData.now_playing.name} — {spotifyData.now_playing.artist}
        </p>
      ) : (
        <p>Nothing playing right now.</p>
      )}

      {/* Followed Artists */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Followed Artists</h3>
      {spotifyData.followed_artists?.length ? (
        <ul>
          {spotifyData.followed_artists.map((artist: string, index: number) => (
            <li key={index}>{artist}</li>
          ))}
        </ul>
      ) : (
        <p>No followed artists found.</p>
      )}
    </section>
  );
}

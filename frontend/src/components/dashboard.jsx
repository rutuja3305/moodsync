import React, { useState } from "react";
import "./dashboard.css";




function mapInputToMood(text) {
  const t = (text || "").toLowerCase().trim();

const buckets = {
  happy: [
    "happy", "joy", "joyful", "glad", "excited", "awesome",
    "great", "good", "energetic", "cheerful", "delighted",
    "positive", "optimistic", "smile", "grateful"
  ],
  sad: [
    "sad", "down", "depressed", "upset", "unhappy", "low",
    "cry", "alone", "heartbroken", "tearful", "hopeless",
    "gloomy", "miserable", "blue", "lost"
  ],
  angry: [
    "angry", "mad", "furious", "frustrated", "annoyed",
    "irritated", "rage", "hate", "upset", "bitter",
    "resentful", "hostile", "agitated"
  ],
  relaxed: [
    "relaxed", "calm", "peaceful", "chill", "comfortable",
    "serene", "relief", "easy", "free", "mellow",
    "rested", "soothing", "balanced", "tranquil"
  ]
};


  for (const mood in buckets) {
    if (buckets[mood].some(word => t.includes(word))) return mood;
  }
  // default to stressed → calm music helps most often
  return "stressed";
}


const MOOD_DATA = {
  happy: {
    emoji: "😊",
    quotes: [
      "Keep smiling, the world is brighter with you.",
      "Happiness is contagious—spread it around!",
      "Joy is the simplest form of gratitude."
    ],
    songs: {
      bollywood: [
        { title: "Gallan Goodiyan – Dil Dhadakne Do", url: "https://www.youtube.com/watch?v=jCEdTq3j-0U" },
        { title: "London Thumakda – Queen", url: "https://www.youtube.com/watch?v=udra3Mfw2oo" },
        { title: "Badtameez Dil – YJHD", url: "https://www.youtube.com/watch?v=II2EO3Nw4m0" },
        { title: "Abhi Toh Party Shuru Hui Hai – Khoobsurat", url: "https://www.youtube.com/watch?v=8LZgzAZ2lpQ" },
        { title: "Kar Gayi Chull – Kapoor & Sons", url: "https://www.youtube.com/watch?v=NTHz9ephYTw" }
      ],
      english: [
        { title: "Happy – Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
        { title: "Can’t Stop the Feeling – Justin Timberlake", url: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
        { title: "Uptown Funk – Bruno Mars", url: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
        { title: "Shake It Off – Taylor Swift", url: "https://www.youtube.com/watch?v=nfWlot6h_JM" },
        { title: "Good Time – Owl City & Carly Rae Jepsen", url: "https://www.youtube.com/watch?v=H7HmzwI67ec" }
      ]
    }
  },

  sad: {
    emoji: "😢",
    quotes: [
      "Low today, glow tomorrow.",
      "Storms don’t last forever.",
      "One song, one step at a time."
    ],
    // For 'sad' we give UPLIFT songs to cheer up
    songs: {
      bollywood: [
        { title: "Zinda – Bhaag Milkha Bhaag", url: "https://www.youtube.com/watch?v=Ax0G_P2dSBw" },
        { title: "Ilahi – YJHD", url: "https://www.youtube.com/watch?v=fdubeMFwuGs" },
        { title: "Dil Dhadakne Do – ZNMD", url: "https://www.youtube.com/watch?v=WuMWwPHTSoY" },
        { title: "Zindagi Do Pal Ki – Kites", url: "https://www.youtube.com/watch?v=4DbVdym2M90" },
        { title: "Love You Zindagi – Dear Zindagi", url: "https://www.youtube.com/watch?v=bw7bVpI5VcM" }
      ],
      english: [
        { title: "Shake It Off – Taylor Swift", url: "https://www.youtube.com/watch?v=nfWlot6h_JM" },
        { title: "Good as Hell – Lizzo", url: "https://www.youtube.com/watch?v=vuq-VAiW9kA" },
        { title: "Stronger – Kelly Clarkson", url: "https://www.youtube.com/watch?v=Xn676-fLq7I" },
        { title: "Firework – Katy Perry", url: "https://www.youtube.com/watch?v=QGJuMBdaqIw" },
        { title: "Roar – Katy Perry", url: "https://www.youtube.com/watch?v=CevxZvSJLk8" }
      ]
    }
  },

  angry: {
    emoji: "😡",
    quotes: [
      "Take a deep breath, peace starts within.",
      "Don’t let anger control you.",
      "Relax, recharge, restart."
    ],
    songs: {
      bollywood: [
        { title: "Sadda Haq – Rockstar", url: "https://www.youtube.com/watch?v=p9DQINKZxWE" },
        { title: "Allah Ke Bande – Kailash Kher", url: "https://www.youtube.com/watch?v=KSwd2fYX9vg" },
        { title: "Mitwa – Kabhi Alvida Naa Kehna", url: "https://www.youtube.com/watch?v=ru_5PA8cwkE" },
        { title: "Yun Hi Chala Chal – Swades", url: "https://www.youtube.com/watch?v=eEeX2QMlSlo" },
        { title: "Dil Se Re – Dil Se", url: "https://www.youtube.com/watch?v=U3hZW62-KGA" }
      ],
      english: [
        { title: "Numb – Linkin Park", url: "https://www.youtube.com/watch?v=kXYiU_JCYtU" },
        { title: "Believer – Imagine Dragons", url: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
        { title: "Whatever It Takes – Imagine Dragons", url: "https://www.youtube.com/watch?v=gOsM-DYAEhY" },
        { title: "Faint – Linkin Park", url: "https://www.youtube.com/watch?v=LYU-8IFcDPw" },
        { title: "Stronger – Kanye West", url: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" }
      ]
    }
  },

  relaxed: {
    emoji: "😌",
    quotes: [
      "Peace begins with a smile.",
      "Relax, refresh, recharge.",
      "Calm mind, happy soul."
    ],
    songs: {
      bollywood: [
        { title: "Kun Faya Kun – Rockstar", url: "https://www.youtube.com/watch?v=0RDI9CMilhk" },
        { title: "Phir Se Ud Chala – Rockstar", url: "https://www.youtube.com/watch?v=2mWaqsC3U7k" },
        { title: "Agar Tum Saath Ho – Tamasha", url: "https://www.youtube.com/watch?v=sK7riqg2mr4" },
        { title: "Sham – Aisha", url: "https://www.youtube.com/watch?v=kl8T6tsOZJk" },
        { title: "Iktara – Wake Up Sid", url: "https://www.youtube.com/watch?v=akjdj6iHttY" }
      ],
      english: [
        { title: "Perfect – Ed Sheeran", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
        { title: "All of Me – John Legend", url: "https://www.youtube.com/watch?v=450p7goxZqg" },
        { title: "Let Her Go – Passenger", url: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
        { title: "Photograph – Ed Sheeran", url: "https://www.youtube.com/watch?v=nSDgHBxUbVQ" },
        { title: "Stay With Me – Sam Smith", url: "https://www.youtube.com/watch?v=pB-5XG-DbAA" }
      ]
    }
  }
};



function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Dashboard() {
  const [rawInput, setRawInput] = useState("");
  const [language, setLanguage] = useState("bollywood");
  const [activeMood, setActiveMood] = useState("");
  const [quote, setQuote] = useState("");

  const quickSet = (m) => {
    setRawInput(m);
    handleRecommend(m, language);
  };

  const handleRecommend = (text = rawInput, lang = language) => {
    const mood = mapInputToMood(text);
    setActiveMood(mood);
    setLanguage(lang);
    setQuote(pickRandom(MOOD_DATA[mood].quotes));
  };

  const songsToShow = activeMood ? MOOD_DATA[activeMood].songs[language] : [];
  const emoji = activeMood ? MOOD_DATA[activeMood].emoji : "🎧";

  return (
    <div className="dash-wrap">
     
      <audio src="YOUR_MUSIC_URL_HERE.mp3" autoPlay loop />

      <div className="card">
        <h1 className="title">🎵 MoodSync — Playlist by Mood</h1>

     
        <div className="chips">
          {["happy", "sad", "angry", "relaxed"].map((m) => (
            <button key={m} className="chip" onClick={() => quickSet(m)}>
              {m}
            </button>
          ))}
        </div>

    
        <div className="input-row">
          <input
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder="Type how you feel (e.g., 'I am sad' or 'happy')"
          />
          <button onClick={() => handleRecommend()}>Get Playlist</button>
        </div>

       
        <div className="input-row">
          <label>
            <input
              type="radio"
              checked={language === "bollywood"}
              onChange={() => handleRecommend(rawInput, "bollywood")}
            />
            Bollywood
          </label>
          <label>
            <input
              type="radio"
              checked={language === "english"}
              onChange={() => handleRecommend(rawInput, "english")}
            />
            English
          </label>
        </div>

      
        {activeMood && (
          <div className="result">
            <div className="mood-row">
              <span style={{ fontSize: 28 }}>{emoji}</span>
              <div style={{ marginLeft: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 18, textTransform: "capitalize" }}>
                  Mood: {activeMood}
                </div>
                <div style={{ color: "#555" }}>{quote}</div>
              </div>
            </div>

            <ul className="song-list">
              {songsToShow.map((song, i) => (
                <li key={i}>
                  <a href={song.url} target="_blank" rel="noreferrer">
                    {song.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="hint">
          Tip: type words like <b>happy</b>, <b>sad</b>, <b>angry</b>, <b>relaxed</b> or click the quick chips above.
        </div>
      </div>
    </div>
  );
}

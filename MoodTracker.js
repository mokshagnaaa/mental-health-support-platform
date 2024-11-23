// src/App.js
import React, { useState } from 'react';
import './styles.css';

const App = () => {
    const [mood, setMood] = useState('');
    const [moodOutput, setMoodOutput] = useState('');
    const [forumPost, setForumPost] = useState('');
    const [posts, setPosts] = useState([]);

    const handleMoodSubmit = (e) => {
        e.preventDefault();
        setMoodOutput(`You are feeling: ${mood}`);
        setMood(''); // Clear the input field
    };

    const handleForumSubmit = (e) => {
        e.preventDefault();
        if (forumPost.trim()) {
            setPosts([...posts, forumPost]);
            setForumPost('');
        }
    };

    return (
        <div>
            <header>
                <h1>Community Mental Health Support</h1>
            </header>
            <main>
                <section id="mood-tracker">
                    <h2>Mood Tracker</h2>
                    <form id="mood-form" onSubmit={handleMoodSubmit}>
                        <label htmlFor="mood-input">How are you feeling today?</label>
                        <input
                            type="text"
                            id="mood-input"
                            placeholder="Type your feelings..."
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                    <div id="mood-output">{moodOutput}</div>
                </section>
                <section id="resources">
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="#">Therapist Directory</a></li>
                        <li><a href="#">Wellness Articles</a></li>
                        <li><a href="#">Support Groups</a></li>
                    </ul>
                </section>
                <section id="forums">
                    <h2>Anonymized Forums</h2>
                    <p>Join the conversation and share your thoughts anonymously.</p>
                    <form id="forum-form" onSubmit={handleForumSubmit}>
                        <label htmlFor="forum-input">Share your thoughts:</label>
                        <textarea
                            id="forum-input"
                            placeholder="Type your message..."
                            value={forumPost}
                            onChange={(e) => setForumPost(e.target.value)}
                            required
                        />
                        <button type="submit">Post</button>
                    </form>
                    <div id="forum-posts">
                        <h3>Forum Posts:</h3>
                        <ul>
                            {posts.map((post, index) => (
                                <li key={index}>{post}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Community Mental Health Support Platform</p>
            </footer>
        </div>
    );
};

export default App;

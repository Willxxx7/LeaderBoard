# LeaderBoard you need Ctrl + Shift + T to access the teacher login  :) 
Unit 6 Leaderboard
🏆 Hot Beans Leaderboard 2026
A live leaderboard for student website speed competition. Students submit their GitHub Pages sites via Google Form, and the system automatically ranks them based on performance metrics.

✨ Features
📊 Real-time Leaderboard - Live rankings with scores, speed metrics, and improvement tracking

🤖 Auto-Processing - Automatically checks Google Form submissions every 5 minutes

⚡ Speed Testing - Integrates with PageSpeed API for accurate performance scoring

👨‍🏫 Teacher Dashboard - Hidden teacher panel for managing student submissions

📱 Responsive Design - Works on desktop and mobile devices

🔄 Auto-Sync - Real-time updates from Google Form to leaderboard

📋 How It Works
For Students:
Submit your GitHub Pages URL via Google Form

Wait 5 minutes for auto-processing

See your ranking on the live leaderboard

Track improvements with version history

For Teachers:
Access hidden teacher panel (Ctrl+Shift+T)

Approve/Reject student submissions

Update scores and rankings

Publish changes to live leaderboard

🚀 Quick Start
1. Visit the Live Site:
text
https://willxxx7.github.io/LeaderBoard/
2. Submit Your Site:
Fill out the Google Form (link in website)

Use format: https://[username].github.io/[repo]

Wait 5 minutes for processing

3. Check Your Ranking:
Visit the leaderboard

Search for your name/site

View your speed score and metrics

🛠️ Technical Details
Data Flow:
text
Student submits Google Form 
    ↓
Auto-process runs every 5 minutes
    ↓
PageSpeed API tests website
    ↓
Data saved to JSON file
    ↓
Teacher approves/updates
    ↓
Leaderboard updates in real-time
File Structure:
text
LeaderBoard/
├── index.html          # Main leaderboard interface
├── data.json          # Live ranking data (auto-generated)
├── .github/workflows/  # Auto-processing scripts
└── README.md          # This file
Scoring System:
Performance (0-100) - Google PageSpeed score

Speed Index - How quickly content displays

TTFB - Time to First Byte

Version Tracking - Multiple submissions tracked

🔧 Teacher Access
Method 1: Keyboard Shortcut
Navigate to the leaderboard

Press Ctrl + Shift + T

Enter teacher password when prompted

Teacher panels will appear

Teacher Features:
✅ Approve/Reject new submissions

✅ Update student scores

✅ Remove students from leaderboard

✅ Publish changes to GitHub

✅ View pending submissions

✅ Manage student versions

📊 Metrics Tracked
Metric	Description	Ideal Score
Performance	Overall PageSpeed score	90-100
Speed Index	Content visual completion	< 3.0s
TTFB	Time to First Byte	< 600ms
LCP	Largest Contentful Paint	< 2.5s
CLS	Cumulative Layout Shift	< 0.1
🔄 Auto-Processing Schedule
Every 5 minutes - Check Google Form for new submissions

Immediately - Test approved sites with PageSpeed API

Real-time - Update leaderboard when teacher publishes

🌐 Live Services
🌍 Live Site: https://willxxx7.github.io/LeaderBoard/

📝 Submission Form: Google Form Link

📊 GitHub Actions: Auto-processing dashboard

⚡ PageSpeed API: Performance testing

🎯 Competition Rules
Eligibility: Must be GitHub Pages hosted

Submissions: One per student, updates allowed

Scoring: Based on Google PageSpeed metrics

Updates: Can submit improvements weekly

Fair Use: No malicious code or cheating

🆘 Troubleshooting
Common Issues:
Problem	Solution
Site not appearing	Wait 5 minutes, check Google Form submission
Wrong score	Teacher can update via hidden panel
Broken link	Resubmit with correct URL format
No updates	Check GitHub Actions for errors
For Teachers:
If auto-process stops, check GitHub Actions

To reset scores, edit data.json directly

Password reset: Update line 7 in index.html

📈 Version History
v1.0 (Jan 2026) - Initial launch with basic leaderboard

v1.1 (Jan 2026) - Added auto-processing and teacher panel

v1.2 (Jan 2026) - Improved UI and mobile responsiveness

🔒 Security Notes
Teacher panel hidden from public view

Password-protected access

Private GitHub repository

Regular backups of data.json

👥 Contributing
This project is part of the Hot Beans 2026 competition. For issues or suggestions:

Check existing issues

Contact the teacher/admin

Do not modify data.json directly

📄 License
Educational Use Only - Hot Beans Competition 2026

Maintained by: Teacher/Administrator
Live Site: https://willxxx7.github.io/LeaderBoard/
Last Updated: January 2026

Note: This leaderboard updates automatically. Scores may change as websites improve.

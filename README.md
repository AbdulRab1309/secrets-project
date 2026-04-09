# 🤫 Secrets Project

A web application that fetches and displays anonymous secrets from users around the world. Built with **Express.js**, **EJS**, and the [Secrets API](https://secrets-api.appbrewery.com/), featuring a sleek dark-themed UI with animated glowing card effects.

---

## 📸 Features

- **Random Secrets** — Each page load fetches a new anonymous secret from the Secrets API.
- **Animated Card UI** — Secrets are displayed on a card with a rotating neon-glow border animation.
- **Hover to Reveal** — The secret text is hidden by default and revealed on hover with a smooth color transition.
- **Dark Theme** — Modern dark background (`#212534`) with vibrant gradient accents.
- **Custom Typography** — Uses Google Fonts ([Titan One](https://fonts.google.com/specimen/Titan+One) & [Gloria Hallelujah](https://fonts.google.com/specimen/Gloria+Hallelujah)) for a playful, handwritten feel.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Express.js](https://expressjs.com/) | Web server and routing |
| [EJS](https://ejs.co/) | Server-side HTML templating |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [Secrets API](https://secrets-api.appbrewery.com/) | External API providing anonymous secrets |
| CSS Animations | Rotating gradient border & glow effects |

---

## 📁 Project Structure

```
Secrets Project/
├── index.js                        # Express server & API integration
├── package.json                    # Project metadata & dependencies
├── public/
│   ├── images/
│   │   └── whisper-img.jpg         # Card background image
│   └── styles/
│       └── main.css                # Styling with animations & dark theme
└── views/
    └── index.ejs                   # EJS template for the main page
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbdulRab1309/secrets-project.git
   cd secrets-project/Secrets\ Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🔗 API Reference

This project uses the **App Brewery Secrets API**:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/random` | `GET` | Returns a random secret with username |

**Base URL:** `https://secrets-api.appbrewery.com`

**Sample Response:**
```json
{
  "secret": "I still sleep with a nightlight.",
  "username": "anonymousUser42"
}
```

---

## 🎨 Design Highlights

- **Glowing Card Animation** — A CSS `@property`-based rotating gradient border (`#5ddcff` → `#3c67e3` → `#4e00c2`) that spins continuously around the card.
- **Blur Glow Effect** — A scaled-down, blurred copy of the gradient sits behind the card for a soft neon glow.
- **Hover Interaction** — On hover, the secret text fades in while the border animation pauses, drawing focus to the content.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## 🙏 Acknowledgements

- [The App Brewery](https://www.appbrewery.co/) — for the Secrets API and course project
- [Google Fonts](https://fonts.google.com/) — for Titan One & Gloria Hallelujah typefaces

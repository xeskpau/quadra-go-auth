# Quadra Go Auth

A simple Go web application with user authentication, supporting both Google OAuth and email/password login.

## Features

- Home page with login button
- Modal login form
- Google authentication (placeholder)
- Email/password authentication (placeholder)
- Responsive design

## Project Structure

```
quadra-go-auth/
├── main.go                 # Main server file
├── templates/              # HTML templates
│   ├── home.html           # Home page template
│   └── login.html          # Login page template
└── static/                 # Static assets
    ├── css/
    │   └── styles.css      # CSS styles
    ├── js/
    │   └── main.js         # JavaScript functionality
    └── img/
        └── google-icon.svg # Google icon for login button
```

## Prerequisites

- Go 1.16 or higher

## Running the Application

1. Clone the repository:
   ```
   git clone https://github.com/xeskpau/quadra-go-auth.git
   cd quadra-go-auth
   ```

2. Run the application:
   ```
   go run main.go
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Implementation Details

- The application uses Go's standard library for serving web content
- Authentication is currently implemented as placeholders
- For production use, you would need to:
  - Set up proper Google OAuth2 authentication
  - Implement secure password storage and verification
  - Add session management
  - Use HTTPS

## Future Improvements

- Complete Google OAuth2 implementation
- Add user registration
- Implement secure session management
- Add user profile page
- Add password reset functionality
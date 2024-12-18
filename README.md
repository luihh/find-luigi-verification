# Find Luigi Verification

This project implements a verification system for a Discord bot. Users must find Luigi in the minigame based on the Wanted! minigame from SM64DS and NSMBDS. Upon successful verification, the bot updates their roles.

![Screenshot of the website](/public/screenshot.png)

# Setup

1. **Clone the Repository**

```bash
git clone https://github.com/luihh/find-luigi-verification.git
cd find-luigi-verification
```

2. **Install Dependencies**

```bash
pnpm install
```

3. **Set Up Environment Variables**

```env
DISCORD_BOT_TOKEN=your-bot-token-here
DISCORD_GUILD_ID=your-guild-id-here
NOT_VERIFIED_ROLE_ID=role-id-for-not-verified
VERIFIED_ROLE_ID=role-id-for-verified
```

4. **Start the Development Server**

```bash
pnpm dev
```

# API

`POST /api/verify`

- This endpoint verifies users by removing the "not verified" role and adding the "verified" role to the user who visits the verification link.
- **Request body:**

```json
{
  "userId": "discord-user-id"
}
```

- **Response:**
  - **200 OK:** User successfully verified, roles updated.
  - **400 Bad Request:** Missing `userId` in the request.
  - **401 Unauthorized:** Invalid bot token or insufficient permissions.
  - **500 Internal Server Error:** Other errors (e.g., failed API request).

# Frontend (Game)

The frontend is built using Astro and includes the Find Luigi minigame.

- **Game Setup:** 50 characters are randomly placed within a container. One of them is Luigi. When the user clicks Luigi, the bot verifies them and updates their roles.
- **Cookies:** After a successful verification, a cookie is set to prevent further attempts at verification within the session.
- **User ID:** The `userId` is passed as a query parameter in the link (e.g., `?userId=123456789012345678`) to identify the user for the role assignment.

# License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

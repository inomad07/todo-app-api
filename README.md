REST API Server

Stack:

- MongoDB
- Express.js
- Node.js

## Getting Started

### With Docker (recommended)

Everything runs in containers — no local dependencies needed.

1. **Build and start** all services in the background:

   ```bash
   docker compose up -d
   ```

2. **Rebuild from scratch** (when project files change and you need a fresh build):

   ```bash
   docker compose build --no-cache
   docker compose up -d
   ```

3. **Stop and remove** all containers:

   ```bash
   docker compose down
   ```

4. **View real-time server logs**:

   ```bash
   docker compose logs -f nodejs
   ```

### Accessing the services

| Service | URL / Address                             | Notes                                  |
| ------- | ----------------------------------------- | -------------------------------------- |
| API     | `http://localhost:3000`                   | Express + Node.js application          |
| MongoDB | `mongodb://root:password@localhost:27017` | Container named `tododb`, port `27017` |

> **Note:** MongoDB boots automatically alongside the app. Root authentication is configured and all required environment variables are pre-set inside `docker-compose.yml` — no manual database setup needed.

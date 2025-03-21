# API Service Module for Scoreboard Updates

This module is responsible for handling score updates for a live scoreboard on a website.
It ensures that scores are updated in real-time and prevents unauthorized score manipulation.

## **Features**

1. **Live Scoreboard Updates**: The scoreboard displays the top 10 users' scores and updates in real-time.
2. **Score Update API**: Users can dispatch an API call to update their scores after completing an action.
3. **Authentication**: Prevents unauthorized users from updating scores.

## **API Endpoints**

### `POST /update-score`

- **Description**: Updates the user's score.
- **Request Body** :
  ```json
  {
    "userId": "string",
    "score": "number"
  }
  ```
- **Response**:
  200 OK: Score updated successfully.
  401 Unauthorized: User is not authorized to update the score.
  400 Bad Request: Invalid request body.

### `GET /top-scores`

- **Description**: Retrieves the top 10 users' scores.
- **Response**:
  [
    {
    "userId": "string",
    "score": "number"
    },
    ...
  ]


## **Authentication**
- **Description**: Use JWT (JSON Web Tokens) to authenticate users. Each request to /update-score must include a valid JWT in the Authorization header.

## **Real-time Updates **
- **Description**: Server-Sent Events (SSE) for pushing updates to clients.

## **Improvement Suggestions**

Add rate limits to prevent spamming score updates.

Implement leaderboard pagination for scalability.

Use event-driven architecture RabbitMQ for better real-time handling.

## **Flow Diagram**
Link from lucid.app: "https://lucid.app/lucidchart/93d9c772-0217-410b-9e18-b577df63f2d0/edit?viewport_loc=-764%2C-1052%2C3326%2C1614%2C0_0&invitationId=inv_e980c58b-33f1-46dd-a9af-82416eea1821"

## **Conclusion**

This module ensures a secure, efficient, and real-time scoreboard system with a well-defined API structure. The backend engineering team should follow these specifications to implement the module successfully.
# Subscribers API Documentation
## Base URL

`http://localhost:3000/`

`https://subscribe-0cjn.onrender.com/`

## Endpoints

### 1. Get All Subscribers

**URL:** `/subscribers`

**Method:** `GET`

**Description:** Retrieves an array of all subscribers.

**Response:**

    [
        {
            "_id": "60c72b2f9f1b8b001c8e4a2b",
            "name": "Jeread Krus",
            "subscribedChannel": "CNET"
        },
        {
            "_id": "60c72b2f9f1b8b001c8e4a2c",
            "name": "John Doe",
            "subscribedChannel": "freeCodeCamp.org"
        },
        {
            "_id": "60c72b2f9f1b8b001c8e4a2d",
            "name": "Lucifer",
            "subscribedChannel": "Sentex"
        }
    ]


### 2. Get Subscriber Names and Channels
URL: /subscribers/names

Method: GET

Description: Retrieves an array of all subscribers with only name and subscribedChannel fields.

Response:

    [
        {
            "name": "Jeread Krus",
            "subscribedChannel": "CNET"
        },
        {
            "name": "John Doe",
            "subscribedChannel": "freeCodeCamp.org"
        },
        {
            "name": "Lucifer",
            "subscribedChannel": "Sentex"
        }
    ]




Sure, here's a markdown file documenting the API endpoints:

markdown
Copy code

### 3. Get Subscriber by ID
URL: /subscribers/:id

Method: GET

Description: Retrieves a subscriber by the given ID.

URL Parameters:

id: The ID of the subscriber to retrieve.
Response:

Success (200):

    {
    "_id": "60c72b2f9f1b8b001c8e4a2b",
    "name": "Jeread Krus",
    "subscribedChannel": "CNET"
    }

Error (400):

    {
    "message": "Subscriber not found"
    }

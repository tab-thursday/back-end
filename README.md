# back-end

url: https://tabless-be.herokuapp.com/

## End Points:

### Auth End Points:

#### POST:  `/api/register` 

    Register new user and returns id and token


```
    
    REQUEST BODY EXAMPLE

    {
        "username" : "user",
        "password" : "password"
    }
```

```
    
    RESPONSE BODY EXAMPLE

    {
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hdHQiLCJpYXQiOjE1MTYyMzkwMjJ9.ZH_EwE6kEBVFqZBQVhTg6DNDa8iJ9jhZx-QqU_5F9iQ",
        "id" : 1
    }
```

#### POST:  `/api/login` 

    Logs in existing user and returns id and token


```
    
    REQUEST BODY EXAMPLE

    {
        "username" : "user",
        "password" : "password"
    }
```

```
    
    RESPONSE BODY EXAMPLE

    {
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hdHQiLCJpYXQiOjE1MTYyMzkwMjJ9.ZH_EwE6kEBVFqZBQVhTg6DNDa8iJ9jhZx-QqU_5F9iQ",
        "id" : 1
    }
```

### CRUD End Points:

    ALL crud endpoint require a token on the 'Authorization' header

#### GET: `\api\tabs\{user_id}`

    retrieves all tabs for the user with the provided id


```
    
    RESPONSE BODY EXAMPLE

    {
    "tabs": 
        [
            {
            "id": 1,
            "url": "https://google.com/",
            "name": "google search",
            "notes": "find stuff",
            "user_id": 1,
            "category_id": 1,
            "category": "misc"
            }
        ]
    }
```
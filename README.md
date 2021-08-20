# IPL Dashboard

### `Credit` The project idea is heavily inspired from **Java Brains** IPL Dashboard series which is available [here](https://www.youtube.com/playlist?list=PLqq-6Pq4lTTa8V613TZhGq4o8hSgkMGQ0)

> Consider this as an enhanced version of the above

## Goal

Creating a fullstack application using ipl matches data which is available [here](https://www.kaggle.com/patrickb1912/ipl-complete-dataset-20082020?select=IPL+Matches+2008-2020.csv)

## High level steps

1. Clean the data using python

2. Create a backend API to server the data

3. Client side app to consume the data

## Tech used

### Data cleaning and loading

`python` `pandas` `request`

### Backend API

`node js` `typescript` `mongoDB` `express` `mongoose`

### Client App

`react` `typescript`

> **Note** You can use the same stack or just apply the same concepts in your preferred stack

# Folder structure

```
/backend # all the backend related stuff

    - /data # data cleanup notebook and final cleaned csv

    - /src source code for backend API

/frontend # all the frontend related stuff
```

## Run the project locally

### Backend

```
cd backend

docker-compose up -d
```

That's it. Backend API will be running at `http://localhost:3000`

See the backend docs in `/backend/docs.md`

### Frontend

- coming soon...

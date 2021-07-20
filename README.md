# IPL Dashboard

### `Credit` The project idea is heavily inspired from **Java Brains** IPL Dashboard series which is available [here](https://www.youtube.com/playlist?list=PLqq-6Pq4lTTa8V613TZhGq4o8hSgkMGQ0)

> Consider this as an enhanced version of the above

## Goal

Creating a fullstack application using ipl matches data which is available [here](https://www.kaggle.com/patrickb1912/ipl-complete-dataset-20082020?select=IPL+Matches+2008-2020.csv)

## High level steps

1. Clean the data using python

2. Create a backend API to server the data

3. Load the data into the database by calling the backend API using python

4. Client side app to consume the data

## Tech used

### Data cleaning and loading

`python` `pandas` `request`

### Backend API

`node js` `typescript` `mongoDB` `express` `mongoose`

### Client App

`react` `typescript`

> **Note** You can use the same or just apply the same concepts in your preferred stack

## Data cleanup

For cleanup look at

```
/data/data_exploration_cleanup.ipynb
/data/matches.csv
```

## Backend

Have a look at

```
/backend
```

## Frontend

Have a look at

```
/frontend
```

## Run the project locally

### With docker

> Create api and database container

```
cd backend

docker-compose up -d
```

> load the data in the database

**Note** : You need to have `python` `pandas` `requests` installed

```
cd data
python load.py
```

That's it. Backend API will be running at `http://localhost:4000`

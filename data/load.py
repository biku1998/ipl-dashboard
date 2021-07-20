# script to load data in the database by calling the backend API
import pandas as pd
import requests
import json

API_URL = "http://localhost:4000"
REQUEST_HEADERS = {"Content-type": "application/json"}


def load(data=[], url=""):
    if len(data) == 0:
        print("Empty data list passed")
        return
    for t in data:
        status = requests.post(
            API_URL + url, headers=REQUEST_HEADERS, data=json.dumps(t)
        ).status_code
        if status != 201:
            print(f"Failed to create data for {t}")


def main():
    try:
        #  check if the API is running or not
        status = requests.get(API_URL).status_code
        if not status == 200:
            print("Backend API not running....")
            return
        print("Backend API is running...")
        # load the data from csv
        df_matches = pd.read_csv("./matches.csv")
        # load teams
        teams = [
            {"name": t}
            for t in list(set(df_matches["team1"].tolist() + df_matches["team2"].tolist()))
        ]
        load(teams, "/teams")

        # load matches
        matches = []
        for _, match in df_matches.iterrows():
            matches.append(match.to_dict())

        load(matches, "/matches")

    except Exception as e:
        print("Something went wrong when uploading...")
        print(e)



if __name__ == "__main__":
    main()

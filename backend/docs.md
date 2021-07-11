## Backend requirements

---

### Entities

**teams**

- name [unique]
- logo
- \_id

**records**

- teamName
- total
- wins
- \_id

**matches**

- id
- city
- date
- playerOfTheMatch
- venue
- team_1
- team_2
- toss_winner
- winner
- result
- resultMargin
- umpire1
- umpire 2

### Endpoints

#### GET

---

> Teams

`/teams`

_query params_

- fields : to fetch only certain fields e.g `/teams?fields=name,icon`
- name : fetch by name matching e.g `/teams?name=sun`

> Records

`/records` to get all the records

`/records/:teamName` for a specific team

> Matches

`/matches` to get all the matches

`/matches/:teamName` get all the matches of a particular team

paginated
`/matches/:teamName/count=5?sort=desc`

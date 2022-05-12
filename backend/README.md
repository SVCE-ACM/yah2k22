# Backend

## The request

 ```

{
team_name: "",  /* Required and unique */
count: 3, /* Min. 3 */
domain: "",  /*choice */
abstract: "",  /* Important af!! */

member1: {
    name:"",
    college:"",
    email:"",
    phone:"",
    gender: "",  /*choice */
    github_url: "",
},

member2: {
    name:"",
    college:"",
    email:"",
    phone:"",
    gender: "",  /*choice */
    github_url: "",
},
}

```


## Table Schema

teams - team_name, count, team_leaders_name, team_leader_email, team_leader_phone

participants - name, college, team_name, email, phone, gender, github_url   // This will have all the participants

abstracts - team_name, abstract, domain.

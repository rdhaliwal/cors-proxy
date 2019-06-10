workflow "Deploy to Heroku" {
  on = "push"
  resolves = "release"
}

action "login" {
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "release" {
  uses = "actions/heroku@master"
  needs = "login"
  secrets = ["HEROKU_API_KEY"]
  args = "container:push -a rd-cors web"
}

action "Deploy to Heroku" {
  uses = "actions/heroku@master"
  needs = "push"
  secrets = ["HEROKU_API_KEY"]
  args = "container:release -a rd-cors web"
}
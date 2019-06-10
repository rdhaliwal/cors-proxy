workflow "Deploy to Heroku" {
  on = "push"
  resolves = "release"
}

action "release" {
  uses = "actions/heroku@master"
  secrets = ["HEROKU_API_KEY"]
  args = "container:push -a rd-cors web"
}

action "Deploy to Heroku" {
  uses = "actions/heroku@master"
  needs = "push"
  secrets = ["HEROKU_API_KEY"]
  args = "container:release -a rd-cors web"
}

workflow "Deploy to Heroku" {
  on = "push"
  resolves = "push"
}

action "push" {
  uses = "actions/heroku@master"
  secrets = ["HEROKU_API_KEY"]
  args = "container:push -a rd-cors web"
}


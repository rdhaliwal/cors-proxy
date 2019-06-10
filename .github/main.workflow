workflow "Deploy to Heroku" {
  on = "push"
  resolves = ["GitHub Action for Heroku"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "master"
}

action "GitHub Action for Heroku" {
  uses = "actions/heroku@466fea5e8253586a6df75b10e95447b0bfe383c1"
  needs = ["Filters for GitHub Actions"]
  runs = "push"
  secrets = ["HEROKU_API_KEY", "GITHUB_TOKEN"]
}

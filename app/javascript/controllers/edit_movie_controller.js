import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "card"]

  connect() {
  }

  show() {
    this.formTarget.classList.toggle("d-none")
  }

  update(event) {
    event.preventDefault()
    const body = new FormData(this.formTarget)
    const url = this.formTarget.action
    console.log(url)
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: body
    })
    .then(response => response.text())
    .then(data => this.cardTarget.outerHTML = data)
  }
}

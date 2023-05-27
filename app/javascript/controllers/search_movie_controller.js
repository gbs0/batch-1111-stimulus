import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movie"
export default class extends Controller {
  static targets = ["form", "list"]

  connect() {
  }

  search(event) {
    const url = `${this.formTarget.action}?query=${event.target.value}`
    fetch(url, {headers: {"Accept": "text/plain"}})
    .then(response => response.text())
    .then(data => this.listTarget.outerHTML = data)
  }

}

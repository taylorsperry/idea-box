class Idea {
  constructor(idParam, titleParam, bodyParam, qualityParam) {
    this.id = idParam;
    this.title = titleParam;
    this.body = bodyParam;
    this.quality = qualityParam || "Swill";
  }

  saveToStorage() {
    // take the object just created and stringify it to make it a string
  }

  deleteFromStorage() {

  }

  updateContent() {

  }

  updateQuality() {

  }
}
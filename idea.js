class Idea {
  constructor(idParam, titleParam, bodyParam, qualityParam) {
    this.id = idParam;
    this.title = titleParam;
    this.body = bodyParam;
    this.quality = qualityParam || "Swill";
  }

  saveToStorage() {
    var stringIdea = JSON.stringify(this);
    localStorage.setItem(this.id, stringIdea);
  }

  deleteFromStorage() {
    var stringIdea = JSON.stringify(this);
    localStorage.removeItem(this.id, stringIdea);
  }

  updateContent() {
// go for the this.id maaaan

  }

  updateQuality(qualityParam) {
    this.quality = qualityParam;
    this.saveToStorage();
  }
}
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

  updateQuality(qualityParam) {
    this.quality = qualityParam;
    this.saveToStorage();
  }

  // do we even need updateContent?
}
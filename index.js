class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate =  new Date(date);
  }

  yearsExperienceFromBeginningOf(endYear) {
    const endDate = new Date(endYear, 1, 1);
    const years = (endDate - this.startDate)/1000/60/60/24/365; //ms to year
    return parseInt(years) + 1;
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    horizontal = this.endingLocation.horizontal - this.beginningLocation.horizontal
    vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return horizontal + vertical
  }
  
}

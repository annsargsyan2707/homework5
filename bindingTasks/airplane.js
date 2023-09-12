const airbusA321Neo = {
  isFlying: false,
  takeOff() {
    this.isFlying = true;
    return this.isFlying;
  },
  land() {
    this.isFlying = false;
    return this.isFlying;
  },
};
airbusA321Neo.takeOff();
airbusA321Neo.land();
console.log(airbusA321Neo.isFlying);

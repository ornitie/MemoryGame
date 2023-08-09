export class Verb {
  id: string;
  infinitive: string;
  firstPerson: string;
  secondPerson: string;
  thirdPerson: string;
  firstPersonPlural: string;
  secondPersonPlural: string;
  thirdPersonPlural: string;

  constructor(
    id: string,
    infinitive:string,
    firstPerson: string,
    secondPerson: string,
    thirdPerson: string,
    firstPersonPlural: string,
    secondPersonPlural: string,
    thirdPersonPlural: string
  ){
    this.id = id;
    this.infinitive = infinitive;
    this.firstPerson = firstPerson;
    this.secondPerson = secondPerson;
    this.thirdPerson = thirdPerson;
    this.firstPersonPlural = firstPersonPlural;
    this.secondPersonPlural = secondPersonPlural;
    this.thirdPersonPlural = thirdPersonPlural;
  }
}
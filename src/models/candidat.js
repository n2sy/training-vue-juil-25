export class Candidat {
  _id
  prenom
  nom
  age
  profession
  avatar
  constructor(id, prenom, nom, age, profession, avatar) {
    this._id = id
    this.prenom = prenom
    this.nom = nom
    this.age = age
    this.profession = profession
    this.avatar = avatar
  }
}
// export interface Candidat {
//     _id;
//     prenom ;
//     nom ;
//     age ;
//     profession;
//     avatar;
// }

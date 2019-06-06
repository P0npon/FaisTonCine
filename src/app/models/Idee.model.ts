import { Genre } from './Genre.model';
import { TypeIdee } from './TypeIdee.model';

export class Idee {
  constructor(
    public dateCreation: Date,
    public titre: string,
    public idee: string,
    public genre: Genre,
    public typeIdee: TypeIdee,
  ) {}
}
export class Video {
  public name: string;
  public trailerPath: string;
  public posterPath: string;

  constructor(name: string, trailer: string, poster: string) {
    this.name = name;
    this.trailerPath = trailer;
    this.posterPath = poster;
  }
}

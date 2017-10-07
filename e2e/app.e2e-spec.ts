import { MovieMulePage } from './app.po';

describe('movie-mule App', () => {
  let page: MovieMulePage;

  beforeEach(() => {
    page = new MovieMulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

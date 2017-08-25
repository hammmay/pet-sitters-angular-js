import { PetSittersPage } from './app.po';

describe('pet-sitters App', () => {
  let page: PetSittersPage;

  beforeEach(() => {
    page = new PetSittersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

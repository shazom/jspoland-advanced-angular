import { AdvancedAngularPage } from './app.po';

describe('advanced-angular App', () => {
  let page: AdvancedAngularPage;

  beforeEach(() => {
    page = new AdvancedAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to aa!!');
  });
});

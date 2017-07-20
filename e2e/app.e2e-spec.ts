import { ExtphonePage } from './app.po';

describe('extphone App', () => {
  let page: ExtphonePage;

  beforeEach(() => {
    page = new ExtphonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

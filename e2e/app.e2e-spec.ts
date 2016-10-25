import { YmyLoginPage } from './app.po';

describe('ymy-login App', function() {
  let page: YmyLoginPage;

  beforeEach(() => {
    page = new YmyLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

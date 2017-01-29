import { WebPagePersonalPage } from './app.po';

describe('web-page-personal App', function() {
  let page: WebPagePersonalPage;

  beforeEach(() => {
    page = new WebPagePersonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

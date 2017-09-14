import { JedzenieAgatyPage } from './app.po';

describe('jedzenie-agaty App', () => {
  let page: JedzenieAgatyPage;

  beforeEach(() => {
    page = new JedzenieAgatyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

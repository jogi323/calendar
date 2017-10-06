import { SchedulePage } from './app.po';

describe('schedule App', () => {
  let page: SchedulePage;

  beforeEach(() => {
    page = new SchedulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

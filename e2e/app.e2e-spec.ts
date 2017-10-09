import { HW3CSC436Page } from './app.po';

describe('hw3-csc436 App', () => {
  let page: HW3CSC436Page;

  beforeEach(() => {
    page = new HW3CSC436Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

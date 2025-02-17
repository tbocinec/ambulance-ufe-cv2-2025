import { newE2EPage } from '@stencil/core/testing';

describe('tb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tb-ambulance-wl-list></tb-ambulance-wl-list>');

    const element = await page.find('tb-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});

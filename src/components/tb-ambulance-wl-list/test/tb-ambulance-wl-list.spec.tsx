import { newSpecPage } from '@stencil/core/testing';
import { TbAmbulanceWlList } from '../tb-ambulance-wl-list';

describe('tb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TbAmbulanceWlList],
      html: `<tb-ambulance-wl-list></tb-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <tb-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tb-ambulance-wl-list>
    `);
  });
});

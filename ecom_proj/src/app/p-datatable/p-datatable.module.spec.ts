import { PDatatableModule } from './p-datatable.module';

describe('PDatatableModule', () => {
  let pDatatableModule: PDatatableModule;

  beforeEach(() => {
    pDatatableModule = new PDatatableModule();
  });

  it('should create an instance', () => {
    expect(pDatatableModule).toBeTruthy();
  });
});

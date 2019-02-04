import { sorterByProperty } from '../helpers';

describe('sorterByProperty', () => {
  it('should sort the keys of an object alphabetically', () => {
    expect(
      [{ sortKey: 'B' }, { sortKey: 'b' }, { sortKey: 'c' }, { sortKey: 'a' }].sort(
        sorterByProperty('sortKey')
      )
    ).toEqual([{ sortKey: 'a' }, { sortKey: 'B' }, { sortKey: 'b' }, { sortKey: 'c' }]);
  });

  it('should ignore case', () => {
    expect([{ sortKey: 'b' }, { sortKey: 'B' }].sort(sorterByProperty('sortKey'))).toEqual([
      { sortKey: 'b' },
      { sortKey: 'B' },
    ]);
  });

  it('should put numbers in front of letters case', () => {
    expect([{ sortKey: 1 }, { sortKey: 'a' }].sort(sorterByProperty('sortKey'))).toEqual([
      { sortKey: 1 },
      { sortKey: 'a' },
    ]);
  });

  it('should sort dates ascending', () => {
    expect([{ date: '2018-12-31' }, { date: '2018-01-01' }].sort(sorterByProperty('date'))).toEqual(
      [{ date: '2018-01-01' }, { date: '2018-12-31' }]
    );
  });

  it('should create a fallback for empty dates and place them at the back of the list', () => {
    expect([{ date: null }, { date: '2018-01-01' }].sort(sorterByProperty('date', 'date'))).toEqual(
      [{ date: '2018-01-01' }, { date: null }]
    );
  });
});

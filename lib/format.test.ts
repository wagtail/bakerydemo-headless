import { describe, expect, it } from 'vitest';
import { formatDate } from '@/lib/format';

describe('formatDate', () => {
  it('formats ISO date to US long format', () => {
    expect(formatDate('2024-03-15')).toBe('March 15, 2024');
  });

  it('formats a full ISO datetime', () => {
    expect(formatDate('2023-12-25T10:30:00Z')).toMatch(/December 25, 2023/);
  });

  it('handles single-digit days without leading zero', () => {
    expect(formatDate('2024-01-05')).toBe('January 5, 2024');
  });
});

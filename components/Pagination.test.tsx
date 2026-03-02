import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Pagination from '@/components/Pagination';

describe('Pagination', () => {
  it('disables previous link on page 1', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={3} baseUrl="/breads" />,
    );
    const disabledItems = container.querySelectorAll('.page-item.disabled');
    expect(disabledItems).toHaveLength(1);
    expect(disabledItems[0]).toHaveTextContent('previous');
  });

  it('disables next link on last page', () => {
    const { container } = render(
      <Pagination currentPage={3} totalPages={3} baseUrl="/breads" />,
    );
    const disabledItems = container.querySelectorAll('.page-item.disabled');
    expect(disabledItems).toHaveLength(1);
    expect(disabledItems[0]).toHaveTextContent('next');
  });

  it('enables both arrows on a middle page', () => {
    const { container } = render(
      <Pagination currentPage={2} totalPages={3} baseUrl="/breads" />,
    );
    expect(container.querySelectorAll('.page-item.disabled')).toHaveLength(0);
    expect(container.querySelector('.page-link.previous')).toBeInTheDocument();
    expect(container.querySelector('.page-link.next')).toBeInTheDocument();
  });

  it('marks the current page as active with sr-only text', () => {
    const { container } = render(
      <Pagination currentPage={2} totalPages={3} baseUrl="/breads" />,
    );
    const active = container.querySelector('.page-item.active');
    expect(active).toBeInTheDocument();
    expect(active).toHaveTextContent('2');
    expect(active!.querySelector('.sr-only')).toHaveTextContent('(current)');
  });

  it('renders the correct number of page items', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={5} baseUrl="/breads" />,
    );
    expect(container.querySelectorAll('.page-item')).toHaveLength(7);
  });

  it('links to the correct pages', () => {
    const { container } = render(
      <Pagination currentPage={2} totalPages={3} baseUrl="/breads" />,
    );
    const prevLink = container.querySelector('.page-link.previous');
    expect(prevLink).toHaveAttribute('href', '/breads?page=1');
    const nextLink = container.querySelector('.page-link.next');
    expect(nextLink).toHaveAttribute('href', '/breads?page=3');
  });

  it('renders only one page when totalPages is 1', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} baseUrl="/test" />,
    );
    expect(container.querySelectorAll('.page-item.disabled')).toHaveLength(2);
    expect(container.querySelectorAll('.page-item')).toHaveLength(3);
  });
});

import React from 'react';
import { useContent } from './useContent';

/**
 * Example usage of the useContent hook
 * This demonstrates how to use the hook in a component
 */
export function ExampleComponent() {
  const { content, getSection, isLoading, error } = useContent();

  if (isLoading) {
    return <div>Loading content...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  // Access full content object
  const heroHeadline = content.hero.headline;

  // Or use getSection helper for specific sections
  const featuredSection = getSection('featured');
  const heroSection = getSection('hero');

  return (
    <div>
      <h1>{heroHeadline}</h1>
      <h2>{heroSection.subheadline}</h2>
      <p>{heroSection.description}</p>

      <section>
        <h2>{featuredSection.title}</h2>
        <p>{featuredSection.subtitle}</p>
        <ul>
          {featuredSection.categories.map((category) => (
            <li key={category.id}>
              {category.title} - {category.itemCount} items
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/**
 * Example: Using getSection for type-safe section access
 */
export function HeroComponent() {
  const { getSection } = useContent();
  const hero = getSection('hero');

  return (
    <div>
      <h1>{hero.headline}</h1>
      <p>{hero.description}</p>
      <div>
        {hero.cta.map((button, index) => (
          <a key={index} href={button.href}>
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
}

/**
 * Example: Accessing multiple sections
 */
export function MultiSectionComponent() {
  const { getSection } = useContent();

  const hero = getSection('hero');
  const benefits = getSection('benefits');
  const cta = getSection('cta');

  return (
    <div>
      <section>{hero.headline}</section>
      <section>
        <h2>{benefits.title}</h2>
        <ul>
          {benefits.items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </section>
      <section>{cta.headline}</section>
    </div>
  );
}

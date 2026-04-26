/**
 * Example usage of the content configuration with ContentManager
 * This file demonstrates how to use the landingPageContent in React components
 */

import React from 'react';
import { ContentManager, landingPageContent } from './index';

// Initialize ContentManager with the landing page content
const contentManager = new ContentManager(landingPageContent);

// Example 1: Using content in a Hero component
export const ExampleHeroComponent: React.FC = () => {
  const hero = contentManager.getSectionContent('hero');
  
  return (
    <section>
      <h1>{hero.headline}</h1>
      <h2>{hero.subheadline}</h2>
      <p>{hero.description}</p>
      
      <div>
        {hero.cta.map((button, index) => (
          <a 
            key={index} 
            href={button.href}
            className={`btn-${button.variant}`}
          >
            {button.text}
          </a>
        ))}
      </div>
    </section>
  );
};

// Example 2: Using content in a Featured Categories component
export const ExampleFeaturedComponent: React.FC = () => {
  const featured = contentManager.getSectionContent('featured');
  
  return (
    <section>
      <h2>{featured.title}</h2>
      <p>{featured.subtitle}</p>
      
      <div className="categories-grid">
        {featured.categories.map((category) => (
          <a key={category.id} href={category.href}>
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <span>{category.itemCount} items</span>
          </a>
        ))}
      </div>
    </section>
  );
};

// Example 3: Using content in a How It Works component
export const ExampleHowItWorksComponent: React.FC = () => {
  const howItWorks = contentManager.getSectionContent('howItWorks');
  
  return (
    <section>
      <h2>{howItWorks.title}</h2>
      <p>{howItWorks.subtitle}</p>
      
      <div className="steps">
        {howItWorks.steps.map((step) => (
          <div key={step.step}>
            <span className="step-number">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Example 4: Getting all content at once
export const ExampleFullPageComponent: React.FC = () => {
  const content = contentManager.getContent();
  
  return (
    <div>
      <ExampleHeroComponent />
      <ExampleFeaturedComponent />
      <ExampleHowItWorksComponent />
      {/* Add other sections as needed */}
    </div>
  );
};

// Example 5: Updating content dynamically (for CMS integration)
export const updateContentExample = () => {
  contentManager.updateContent({
    hero: {
      ...contentManager.getSectionContent('hero'),
      headline: 'Updated Headline from CMS'
    }
  });
};

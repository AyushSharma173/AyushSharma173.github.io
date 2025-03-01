// src/pages/CaseStudy3.jsx
import React from 'react';
import './CaseStudy.css';

const CaseStudy3 = () => {
  return (
    <div className="case-study-container">
      <header>
        <h1>How PennyMeal Came to Life: My Quest to Eat Better on a Student Budget</h1>
        {/* <p className="date">February 4, 2025</p> */}
      </header>

      <article className="case-study-content">
        <section>
          <h2>The Spark</h2>
          <p>
            A couple of years ago, I found myself standing in the middle of my kitchen at 11 p.m., gazing blankly into a fridge that had somehow managed to be both empty and full at the same time. I was hungry, broke, and worst of all—I had no plan. If you’ve ever tried living alone while also attempting to hit daily protein goals (yes, even when ramen is the main course), you know exactly how chaotic grocery shopping and cooking can be.
          </p>
          <p>
            That night, after yet another failed attempt at meal planning using a simple Notes app, the idea for <strong>PennyMeal</strong> was born. What if there were a single app that could help you plan meals, find recipes, compare grocery prices, and track your spending—all tailored for someone juggling a tight budget and ambitious macros?
          </p>
        </section>

        <section>
          <h2>From Idea to Prototype</h2>
          <p>
            I was a sophomore living on my own when the concept of PennyMeal started taking shape. Initially, I whipped up a prototype in React that simply pulled in a list of recipes from a random API. It was a rough draft—just a static front end with placeholders—but it ignited a fire in me. I realized I could combine meal planning, recipe search, and even grocery price comparisons into a single, cohesive platform.
          </p>
          <p>
            With many late nights fueled by caffeine, I created initial sketches and mockups using Sketch. My friends, mostly fellow students, loved the idea—although one even joked, “Can it help me stop living off ramen?” That challenge only pushed me harder.
          </p>
          <p>
            I decided to structure the project using a React + Redux front end for efficient state management. For the backend, I chose Python (with FastAPI) to build APIs for user authentication, meal planning, and analytics. AWS hosted it all: EC2 for the servers and S3 for static assets. This setup was not only scalable but also an excellent opportunity to get hands-on with modern technologies.
          </p>
        </section>

        <section>
          <h2>Iterative Development: Feature by Feature</h2>
          <h3>Meal Planning</h3>
          <p>
            The heart of PennyMeal is its meal planning feature. Initially, I created a simple drag-and-drop calendar where users could slot recipes into daily plans. The first version was clunky, to say the least. Feedback from early testers indicated that they needed a more visible breakdown of their daily macros—proteins, fats, and carbs.
          </p>
          <p>
            In version 2.0, I revamped the design by incorporating dynamic macro calculations, color-coded progress bars, and portion recommendations. Suddenly, users were not only planning meals but also tracking their nutritional goals with ease.
          </p>

          <h3>Recipe Search &amp; AI-Powered Suggestions</h3>
          <p>
            Next, I integrated an advanced recipe search feature. Instead of a basic keyword match, I employed an open-source large language model (LLM) to process natural language queries. Users could type things like “high-protein vegetarian meals under 400 calories” and receive personalized suggestions. While the AI wasn’t perfect from day one, it provided a conversational and user-friendly search experience.
          </p>

          <h3>Grocery Price Comparison</h3>
          <p>
            Building a reliable grocery price scraper was one of the most challenging tasks. I developed AWS Lambda functions to run nightly scrapes of major supermarket websites. This feature allowed users to see which store had the best deal on items like avocados or chicken breasts—a lifesaver for anyone on a tight budget.
          </p>

          <h3>Budget Tracker &amp; Analytics</h3>
          <p>
            Since I was always struggling to stick to a budget, I added a personal budgeting tool. With Mixpanel integrated to track user actions (such as meal plan creations and recipe saves), I was able to generate custom dashboards that informed further iterations. Over a few months, PennyMeal grew from a handful of users (mostly friends) to over 2,000 daily active users across multiple campuses.
          </p>
        </section>

        <section>
          <h2>Data &amp; Growth: A Snapshot</h2>
          {/* <p>
            To illustrate the growth, I created a quick chart showing daily active users. The graph starts at just 10 users in January and climbs steadily to 2,000 by July. (See Figure 1 below.)
          </p> */}
          <div className="image-container">
            <img src="../assets/Users.jpg" alt="PennyMeal User Growth" className="case-study-image" />
            <p className="image-caption">Figure 1: Daily Active Users Growth Curve</p>
          </div>
        </section>

        <section>
          <h2>Embracing Agile Methodologies</h2>
          <p>
            With classes, part-time work, and endless coding sessions, adopting an agile mindset was crucial. Every Monday, I set up a sprint plan outlining goals like “improve load times” or “integrate new recipe API.” I held quick daily check-ins (even if just with myself) and used Friday feedback surveys to gather thoughts from beta users.
          </p>
          <p>
            This iterative process not only kept the project on track but also instilled discipline in my workflow. It’s amazing how breaking down a large project into small, manageable tasks can transform chaos into a structured, successful endeavor.
          </p>
        </section>

        <section>
          <h2>Lessons Learned &amp; The Road Ahead</h2>
          <p>
            Working on PennyMeal has been a journey of growth, perseverance, and innovation. Here are a few key takeaways:
          </p>
          <ul>
            <li>
              <strong>Focus on Core Features:</strong> I learned that trying to build every feature at once only leads to burnout. Prioritizing meal planning and then expanding into grocery comparisons and budgeting made the project more manageable.
            </li>
            <li>
              <strong>Keep the UI Simple:</strong> Users appreciate a clean, intuitive interface. I streamlined complex workflows into a single, user-friendly dashboard.
            </li>
            <li>
              <strong>Flexibility is Key:</strong> Web scraping for grocery deals required constant adjustments due to website changes. Building multiple fallback parsers and scheduling regular tests ensured that the feature stayed reliable.
            </li>
            <li>
              <strong>Stay Inspired:</strong> Even on the toughest nights, reading a tweet from a happy user—like the one that said, “Saved $12 this week, that's a burrito for free!”—kept me motivated.
            </li>
          </ul>
          <p>
            Today, PennyMeal is still very much a work in progress. I’m actively refining the recipes, improving the UI with frameworks like Tailwind CSS, and exploring a mobile companion app with React Native. I’m even considering integrating newer LLMs to enhance recipe personalization further.
          </p>
        </section>

        <section>
          <h2>What’s Next?</h2>
          <p>
            The future of PennyMeal is bright. Upcoming features include:
          </p>
          <ul>
            <li>
              <strong>Interactive Recipe Stories:</strong> Allowing users to submit and share personal cooking stories alongside recipes.
            </li>
            <li>
              <strong>Enhanced AI Suggestions:</strong> Upgrading to more robust open-source language models for even better recipe and ingredient suggestions.
            </li>
            <li>
              <strong>Mobile Integration:</strong> A dedicated mobile app to sync your weekly plans and send timely grocery alerts.
            </li>
          </ul>
          <p>
            My ultimate dream is for PennyMeal to empower everyone—from students and busy professionals to fitness enthusiasts—to cook delicious meals without breaking the bank.
          </p>
        </section>

        {/* <section>
          <h2>See It in Action</h2>
          <p>
            Curious to check out PennyMeal? Take a look at some screenshots in the <a href="#gallery">photo gallery</a> or visit the <a href="https://pennymeal.com/" target="_blank" rel="noopener noreferrer">Beta Landing Page</a> and sign up to try it yourself.
          </p>
        </section> */}

        <section>
        <h2>See It in Action</h2>
        <p>
            Want to create your own meal plans with custom constraints? Try it out at 
            <a href="https://pennymeal.com/meal-planning" target="_blank" rel="noopener noreferrer">
            PennyMeal Meal Planning
            </a>.
        </p>
        <p>
            Check out the full platform at our 
            <a href="https://pennymeal.com/" target="_blank" rel="noopener noreferrer">
            Landing Page
            </a>.
        </p>
        </section>



      </article>
    </div>
  );
};

export default CaseStudy3;

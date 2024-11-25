import React from 'react';
import './Home.css';  // Import the custom CSS file for styling

function Home() {
  return (
    <div className="home-container">
      {/* Home Section */}
      <header className="home-header">
        <div className="image-container">
          <img 
            src="./man_baking.webp"
            alt="Man baking a cake" 
            className="home-image" 
          />
        </div>
        <div className="header-text">
          <h1>Welcome to Sweet Delights - Homemade Bakes</h1>
          <p>Discover the joy of freshly baked goods, crafted with love and the finest ingredients. At Sweet Delights, we bring the magic of home-baked cakes, pastries, and cookies straight to your door. Every bite is a taste of warmth, care, and passion.</p>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Sweet Delights</h2>
        <p>
          Sweet Delights is a small home-based bakery offering a range of handmade cakes, pastries, and desserts. Founded by [Your Name], a passionate baker with years of experience, we specialize in creating delicious and beautifully crafted treats for all occasions.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is simple: to bring happiness through homemade baking. Each cake, pastry, and cookie is made with love and attention to detail. We aim to delight our customers with not just great flavors but also a memorable experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <h3>Custom Cakes</h3>
        <p>
          From birthdays to weddings, we specialize in creating custom cakes that are as beautiful as they are delicious. Let us know your theme, and we’ll design a cake that fits perfectly with your event!
        </p>

        <h3>Pastries & Cookies</h3>
        <p>
          Whether you’re craving a delicate pastry or a batch of freshly baked cookies, we’ve got you covered. From flaky croissants to gooey chocolate chip cookies, our pastries are made to perfection.
        </p>

        <h3>Seasonal & Special Occasion Treats</h3>
        <p>
          We offer a range of seasonal baked goods for holidays, special occasions, and more. From Christmas cakes to Valentine’s Day cupcakes, there’s always something sweet to look forward to!
        </p>

        <h3>Delivery & Pickup</h3>
        <p>
          We offer local delivery or convenient pickup options for all your orders. Whether you’re hosting a party or enjoying a quiet afternoon, we’ll make sure your sweet treats arrive fresh and on time.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question about our baked goods or want to place an order, feel free to reach out. We are always happy to help.
        </p>
        <h3>Email:</h3>
        <p><a href="mailto:contact@sweetdelights.com">contact@sweetdelights.com</a></p>

        <h3>Phone:</h3>
        <p>(123) 456-7890</p>

        <h3>Social Media:</h3>
        <p>Follow us on Instagram and Facebook for daily updates and special offers!</p>

        <h3>Order Form</h3>
        <p>
          To place an order, please fill out our online order form, and we’ll get back to you as soon as possible. We offer both custom orders and pre-made goodies for quick pickup or delivery.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <h3>Do you offer custom cakes?</h3>
        <p>Yes! We specialize in custom cakes for birthdays, weddings, and other special occasions. Please contact us with your details, and we’ll create something beautiful and delicious for you.</p>

        <h3>What ingredients do you use?</h3>
        <p>We use the finest, freshest ingredients for all our bakes, including high-quality butter, flour, eggs, and natural flavorings. We also offer gluten-free and vegan options for most of our cakes and pastries.</p>

        <h3>How far in advance should I place an order?</h3>
        <p>We recommend placing orders at least 3-5 days in advance, especially for custom cakes. However, if you need something sooner, don’t hesitate to reach out, and we’ll do our best to accommodate your needs.</p>
      </section>
    </div>
  );
}

export default Home;
